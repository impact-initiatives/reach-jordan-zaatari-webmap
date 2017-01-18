import store from '../../store/index.js';
import colors from '../../constants/colors.js';
import layers from '../../constants/layers.js';
import sources from '../../constants/sources.js';
import keys from '../../constants/keys/septic-tanks.js';
import values from '../../constants/values/septic-tanks.js';
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
        property: keys.VOLUME,
        stops: [
          [values.volume.TWO, colors.LIGHT_RED_100],
          [values.volume.FOUR, colors.GREEN],
          [values.volume.EIGHT, colors.MEDIUM_BLUE],
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
  if (features.length && features[0].properties[keys.VOLUME] !== 'null') {
    const feature = features[0];
    const header = '<div><b>Connected Households</b></div>';
    const households = feature.properties[keys.HOUSES]
      .split(',')
      .filter((house) => house)
      .map((house) => `<div>${house}</div>`);
    const popupText = [header, ...households].join('');
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
    features.length && features[0].properties[keys.VOLUME] !== 'null') ? 'pointer' : '';
}

export default septicTankSize;
