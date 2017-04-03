import store from '../../store/index.js';
import colors from '../../constants/colors.js';
import layers from '../../constants/layers.js';
import sources from '../../constants/sources.js';
import * as columns from '../../constants/columns/septic.js';
import utils from '../utils/index.js';

const { mapboxgl } = window;

function septicTankSize({ map }) {
  store.subscribe(() => modifyLayer({ map }));
  map.addLayer(getLayer());
  addPopup({ map });
  modifyLayer({ map });
}

function modifyLayer({ map }) {
  utils.modifySepticLayer({ map, layerId: layers.SEPTIC_TANKS });
}

function getLayer() {
  return {
    id: layers.SEPTIC_TANKS,
    paint: {
      'circle-color': {
        property: columns.volume.KEY,
        stops: [
          [columns.volume.VALUES.TWO, colors.LIGHT_RED_100],
          [columns.volume.VALUES.FOUR, colors.GREEN],
          [columns.volume.VALUES.EIGHT, colors.MEDIUM_BLUE],
        ],
        type: 'categorical',
      },
      'circle-opacity': 0.8,
    },
    source: sources.SEPTIC_TANKS,
    type: 'circle',
  };
}

function addPopup({ map }) {
  map.on('click', ({ point }) => onClick({ point, map }));
  map.on('mousemove', ({ point }) => onMouseMove({ point, map }));
}

function onClick({ point, map }) {
  const features = map.queryRenderedFeatures(point, { layers: [layers.SEPTIC_TANKS] });
  if (features.length && features[0].properties[columns.volume.KEY] !== 'null') {
    const feature = features[0];
    const steelTank = `<div>${feature.properties[columns.steelId.KEY] || 'N/A'}</div>`;
    const ventilation1 = feature.properties[columns.ventilation1.KEY];
    const ventilation2 = feature.properties[columns.ventilation2.KEY];
    const ventilationArray = [ventilation1, ventilation2].filter(Boolean).join(', ') || 'N/A';
    const ventilationText = `<div>${ventilationArray}</div>`;
    const households = feature.properties[columns.houses.KEY].split(',')
      .map((house) => `<div>${house}</div>`);
    const popupText = [
      '<div><b>Ventilation Pipe Length (cm)</b></div>',
      ventilationText,
      '<div><b>Connected Steel Tank</b></div>',
      steelTank,
      '<div><b>Connected Households</b></div>',
      ...households,
    ].join('');
    new mapboxgl.Popup({ closeButton: false })
      .setLngLat(map.unproject(point))
      .setHTML(popupText)
      .addTo(map);
  }
}

function onMouseMove({ point, map }) {
  const features = map.queryRenderedFeatures(point, { layers: [layers.SEPTIC_TANKS] });
  const canvas = map.getCanvas();
  canvas.style.cursor = (
    features.length && features[0].properties[columns.volume.KEY] !== 'null') ? 'pointer' : '';
}

export default septicTankSize;
