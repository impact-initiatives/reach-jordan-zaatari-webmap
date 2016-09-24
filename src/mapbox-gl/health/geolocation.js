import store from '../../store/index.js';
import { WHITE, ORANGE } from '../../constants/colors.js';

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
  if (!map.getLayer('user-location-outline')) {
    map.addLayer({
      id: 'user-location-outline',
      paint: {
        'circle-color': WHITE,
        'circle-radius': 6,
      },
      source: 'user-location',
      type: 'circle',
    });
  }
  if (!map.getLayer('user-location-fill')) {
    map.addLayer({
      id: 'user-location-fill',
      paint: {
        'circle-color': ORANGE,
      },
      source: 'user-location',
      type: 'circle',
    });
  }
}

function error() {}

export default function ({ map }) {
  const state = store.getState();
  if (state.geolocation.id) {
    navigator.geolocation.clearWatch(state.geolocation.id);
  }
  const id = navigator.geolocation.watchPosition(success.bind(map), error, options);
  addWatch(id);
}
