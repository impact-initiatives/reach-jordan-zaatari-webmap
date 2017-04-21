import store from '../../store/index.js';
import messages from '../../translations/health.js';
import * as colors from '../../constants/colors.js';
import layers from '../../constants/layers.js';
import sources from '../../constants/sources.js';
import keys from '../../constants/keys/camp-facilities.js';
import values from '../../constants/values/camp-facilities.js';

const { mapboxgl } = window;

function addLayer({ map }) {
  store.subscribe(() => modifyLayer({ map }));
  map.addLayer(getLayerBase());
  map.addLayer(getLayerFill());
  modifyLayer({ map });
  addPopup({ map });
}

function getLayerBase() {
  return {
    id: layers.CAMP_FACILITIES_HEALTH_BASE,
    paint: {
      'fill-color': colors.DARK_GREY_50,
      'fill-opacity': 0.9,
      'fill-outline-color': colors.WHITE,
    },
    source: sources.CAMP_FACILITIES,
    type: 'fill',
  };
}

function getLayerFill() {
  return {
    id: layers.CAMP_FACILITIES_HEALTH_FILL,
    paint: {
      'fill-color': {
        property: keys.HEALTH_TYPE,
        stops: [
          [values.healthType.CAMP_FACILITY_WITH_HEALTH, colors.MEDIUM_BLUE],
          [values.healthType.HEALTHCARE_FACILITY, colors.LIGHT_RED_100],
          [values.healthType.CAMP_FACILITY, colors.DARK_GREY_50],
        ],
        type: 'categorical',
      },
      'fill-opacity': 0.9,
      'fill-outline-color': colors.WHITE,
    },
    source: sources.CAMP_FACILITIES,
    type: 'fill',
  };
}

function modifyLayer({ map }) {
  const storeFilter = store.getState().filters.health;
  modifyLayerType({
    equal: '==',
    has: 'has',
    map,
    storeFilter,
    layerId: layers.CAMP_FACILITIES_HEALTH_FILL,
  });
  modifyLayerType({
    equal: '!=',
    has: '!has',
    map,
    storeFilter,
    layerId: layers.CAMP_FACILITIES_HEALTH_BASE,
  });
}

function modifyLayerType({ equal, has, map, storeFilter, layerId }) {
  const mapFilter = Object.entries(storeFilter)
    .filter(([, value]) => value)
    .map(([key]) => ([equal, key, values.filter.TRUE]));
  if (!mapFilter.length) mapFilter.push([has, keys.HEALTH_TYPE]);
  map.setFilter(layerId, ['any', ...mapFilter]);
}

function addPopup({ map }) {
  map.on('click', ({ point }) => onClick({ map, point }));
  map.on('mousemove', ({ point }) => onMouseMove({ map, point }));
}

function onClick({ map, point }) {
  const { lang } = store.getState();
  const features = map.queryRenderedFeatures(point, {
    layers: [layers.CAMP_FACILITIES_HEALTH_FILL],
  });
  if (features.length && features[0].properties[keys.HEALTH_SERVICES_EN] !== 'null') {
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
      <b>${feature.properties[keys.name[lang]]}</b>
    </p>
    <p>
      <div><b>${messages.popup.hours[lang]}</b></div>
      <div>${feature.properties[keys.hours[lang]]}</div>
    </p>
    <p>
      <div><b>${messages.popup.services[lang]}</b></div>
      <div>${feature.properties[keys.healthServices[lang]]}</div>
    </p>
  `;
}

function onMouseMove({ map, point }) {
  const features = map.queryRenderedFeatures(point, {
    layers: [layers.CAMP_FACILITIES_HEALTH_FILL],
  });
  const canvas = map.getCanvas();
  canvas.style.cursor = (
    features.length && features[0].properties[keys.HEALTH_SERVICES_EN] !== 'null') ? 'pointer' : '';
}

export default addLayer;
