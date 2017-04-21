import store from '../../store/index.js';
import * as colors from '../../constants/colors.js';
import layers from '../../constants/layers.js';
import sources from '../../constants/sources.js';
import mapbox from '../../constants/mapbox.js';
import * as columns from '../../constants/columns/steel.js';
import utils from '../utils/index.js';

const { mapboxgl } = window;

function steelTanks({ map }) {
  store.subscribe(() => modifyLayer({ map }));
  map.addLayer(getLayer());
  map.on('click', ({ point }) => onClick({ point, map }));
  modifyLayer({ map });
}

function modifyLayer({ map }) {
  utils.modifySteelLayer({ map, layerId: layers.STEEL_TANKS });
}

function getLayer() {
  return {
    id: layers.STEEL_TANKS,
    paint: {
      'circle-color': {
        property: columns.connected.KEY,
        stops: [
          [true, colors.DARK_GREY_100],
          [false, colors.DARK_GREY_50],
        ],
        type: 'categorical',
      },
      'circle-radius': {
        stops: [
          [mapbox.MIN_ZOOM, mapbox.MIN_TANK_SIZE],
          [mapbox.MAX_ZOOM, mapbox.MAX_STEEL_SIZE],
        ],
        base: 2,
      },
      'circle-opacity': 0.8,
    },
    source: sources.STEEL_TANKS,
    type: 'circle',
  };
}

function onClick({ point, map }) {
  const features = map.queryRenderedFeatures(point, { layers: [layers.STEEL_TANKS] });
  if (features.length && features[0].properties[columns.id.KEY] !== '') {
    const feature = features[0];
    const capacity = `<div>${feature.properties[columns.capacity.KEY] || 'N/A'}</div>`;
    const septicTanks = feature.properties[columns.septicList.KEY].split(',')
      .map((septicTank) => `<div>${septicTank}</div>`);
    const septicTankText = septicTanks.length ? septicTanks : ['<div>N/A</div>'];
    const popupText = [
      '<div><b>Capacity (m3)</b></div>',
      capacity,
      '<div><b>Connected Septic Tanks</b></div>',
      ...septicTankText,
    ].join('');
    new mapboxgl.Popup({ closeButton: false })
      .setLngLat(map.unproject(point))
      .setHTML(popupText)
      .addTo(map);
  }
}

export default steelTanks;
