import store from '../../store/index.js';
import colors from '../../constants/colors.js';
import layers from '../../constants/layers.js';
import sources from '../../constants/sources.js';

const options = { enableHighAccuracy: true };

function addLayer({ map }) {
  const state = store.getState();
  if (state.geolocation.id) {
    navigator.geolocation.clearWatch(state.geolocation.id);
  }
  const id = navigator.geolocation.watchPosition(success.bind(map), error, options);
  addWatch(id);
}

function success({ coords }) {
  const map = this;
  if (map.getSource(sources.GEOLOCATION)) {
    map.removeSource(sources.GEOLOCATION);
  }
  map.addSource(sources.GEOLOCATION, getSource({ coords }));
  if (!map.getLayer(layers.GEOLOCATION)) {
    map.addLayer(getLayer());
  }
}

function getSource({ coords }) {
  return {
    data: {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [coords.longitude, coords.latitude],
      },
    },
    type: 'geojson',
  };
}

function getLayer() {
  return {
    id: layers.GEOLOCATION,
    paint: {
      'circle-color': colors.ORANGE,
      'circle-stroke-width': 1,
      'circle-stroke-color': colors.WHITE,
    },
    source: sources.GEOLOCATION,
    type: 'circle',
  };
}

function error() {}

function addWatch(id) {
  store.dispatch({ type: (state) => ({
    ...state,
    geolocation: {
      ...state.geolocation,
      id,
    },
  }) });
}

export default addLayer;
