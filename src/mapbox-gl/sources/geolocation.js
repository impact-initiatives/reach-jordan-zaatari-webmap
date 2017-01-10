import store from '../../store/index.js';
import colors from '../../constants/colors.js';
import layer from '../../constants/layers/geolocation.js';

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
  if (map.getSource(layer.SOURCE_ID)) {
    map.removeSource(layer.SOURCE_ID);
  }
  map.addSource(layer.SOURCE_ID, {
    data: {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [coords.longitude, coords.latitude],
      },
    },
    type: 'geojson',
  });
  if (!map.getLayer(layer.LAYER_ID)) {
    map.addLayer({
      id: layer.LAYER_ID,
      paint: {
        'circle-color': colors.ORANGE,
        'circle-stroke-width': 1,
        'circle-stroke-color': colors.WHITE,
      },
      source: layer.SOURCE_ID,
      type: 'circle',
    });
  }
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

export default function geolocation({ map }) {
  addLayer({ map });
}
