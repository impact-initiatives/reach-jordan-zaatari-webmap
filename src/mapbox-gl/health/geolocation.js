import store from '../../store/index.js';
import { DARK_GREY_100 } from '../../constants/colors.js';

const options = { enableHighAccuracy: true };

function addWatch(id) {
  store.dispatch({ type: (prevState) => {
    const state = JSON.parse(JSON.stringify(prevState));
    state.geolocation.id = id;
    return state;
  } });
}

function success({ coords }) {
  const map = this;
  if (map.getSource('user-location')) {
    map.removeSource('user-location');
  }
  if (map.getLayer('user-location-circle')) {
    map.removeLayer('user-location-circle');
  }
  map.addSource('user-location', {
    data: {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [coords.longitude, coords.latitude],
      },
    },
    type: 'geojson',
  });
  map.addLayer({
    id: 'user-location-circle',
    paint: {
      'circle-color': DARK_GREY_100,
      'circle-opacity': 0.75,
    },
    source: 'user-location',
    type: 'circle',
  });
}

function error() {}

export default function (map) {
  const state = store.getState();
  if (state.geolocation.id) {
    navigator.geolocation.clearWatch(state.geolocation.id);
  }
  const id = navigator.geolocation.watchPosition(success.bind(map), error, options);
  addWatch(id);
}
