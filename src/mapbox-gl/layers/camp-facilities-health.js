import store from '../../store/index.js';
import { reach } from '../../constants/resources.js';
import colors from '../../constants/colors.js';
import utils from '../utils/index.js';
import messages from '../../translations/health.js';
import layer from '../../constants/layers/camp-facilities-health.js';

const { mapboxgl } = window;

function fetchLayer({ map }) {
  fetch(reach.CAMP_FACILITIES)
    .then((response) => response.json())
    .then(({ features }) => addLayer({ features, map }));
}

function addLayer({ features, map }) {
  utils.addSourceToMap({ features, map, sourceId: layer.SOURCE_ID });
  map.addLayer(getLayerBase());
  map.addLayer(getLayerFill());
  modifyLayer({ map });
  addPopup({ map });
}

function getLayerBase() {
  return {
    id: layer.LAYER_ID_BASE,
    paint: {
      'fill-color': colors.DARK_GREY_50,
      'fill-opacity': 0.9,
      'fill-outline-color': colors.WHITE,
    },
    source: layer.SOURCE_ID,
    type: 'fill',
  };
}

function getLayerFill() {
  return {
    id: layer.LAYER_ID_FILL,
    paint: {
      'fill-color': {
        property: layer.PROP_TYPE,
        stops: [
          [layer.VALUE_CAMP_HEALTH, colors.MEDIUM_BLUE],
          [layer.VALUE_HEALTH, colors.LIGHT_RED_100],
          [layer.VALUE_CAMP, colors.DARK_GREY_50],
        ],
        type: 'categorical',
      },
      'fill-opacity': 0.9,
      'fill-outline-color': colors.WHITE,
    },
    source: layer.SOURCE_ID,
    type: 'fill',
  };
}

function modifyLayer({ map }) {
  const storeFilter = store.getState().filters.health;
  modifyLayerType({ equal: '==', has: 'has', map, storeFilter, layerId: layer.LAYER_ID_FILL });
  modifyLayerType({ equal: '!=', has: '!has', map, storeFilter, layerId: layer.LAYER_ID_BASE });
}

function modifyLayerType({ equal, has, map, storeFilter, layerId }) {
  const mapFilter = Object.entries(storeFilter)
    .filter(([, value]) => value)
    .map(([key]) => ([equal, key, layer.VALUE_TRUE]));
  if (!mapFilter.length) mapFilter.push([has, layer.PROP_TYPE]);
  map.setFilter(layerId, ['any', ...mapFilter]);
}

function addPopup({ map }) {
  map.on('click', ({ point }) => onClick({ map, point }));
  map.on('mousemove', ({ point }) => onMouseMove({ map, point }));
}

function onClick({ map, point }) {
  const { lang } = store.getState();
  const features = map.queryRenderedFeatures(point, { layers: [layer.LAYER_ID_FILL] });
  if (features.length && features[0].properties[layer.PROP_SERVICES_EN] !== 'null') {
    const feature = features[0];
    new mapboxgl.Popup({ closeButton: false })
      .setLngLat(map.unproject(point))
      .setHTML(getPopupHtml({ feature, lang }))
      .addTo(map);
  }
}

function getPopupHtml({ feature, lang }) {
  return `
    <p>
      <b>${feature.properties[layer.propName[lang]]}</b>
    </p>
    <p>
      <div><b>${messages.popup.hours[lang]}</b></div>
      <div>${feature.properties[layer.propHours[lang]]}</div>
    </p>
    <p>
      <div><b>${messages.popup.services[lang]}</b></div>
      <div>${feature.properties[layer.propServices[lang]]}</div>
    </p>
  `;
}

function onMouseMove({ map, point }) {
  const features = map.queryRenderedFeatures(point, {
    layers: [layer.LAYER_ID_FILL],
  });
  const canvas = map.getCanvas();
  canvas.style.cursor = (
    features.length && features[0].properties[layer.PROP_SERVICES_EN] !== 'null') ? 'pointer' : '';
}

export default function ({ map }) {
  store.subscribe(() => modifyLayer({ map }));
  fetchLayer({ map });
}
