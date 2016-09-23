import store from '../../store/index.js';
import { REACH } from '../../constants/resources.js';
import { LIGHT_RED_100, MEDIUM_BLUE, DARK_GREY_50 } from '../../constants/colors.js';

function modifyCampFacilities(map) {
  const filter = [];
  const { filters } = store.getState();
  for (const [key, value] of Object.entries(filters)) {
    if (value) filter.push(['==', key, 'Yes']);
  }
  if (!filter.length) filter.push(['has', 'OBJECTID_1']);
  map.setFilter('health-facilities-fill', ['any', ...filter]);
}

function addCampFacilities(map) {
  map.addSource('health-facilities', {
    data: REACH.CAMP_FACILITIES,
    type: 'geojson',
  });
  map.addLayer({
    id: 'health-facilities-base',
    paint: {
      'fill-color': DARK_GREY_50,
      'fill-opacity': 0.8,
    },
    source: 'health-facilities',
    type: 'fill',
  });
  map.addLayer({
    id: 'health-facilities-fill',
    paint: {
      'fill-color': {
        property: 'Health_Typ',
        stops: [
          ['Healthcare Facility', LIGHT_RED_100],
          ['Camp Facility with Health Services', MEDIUM_BLUE],
          ['Camp Facility', DARK_GREY_50],
        ],
        type: 'categorical',
      },
      'fill-opacity': 0.8,
    },
    source: 'health-facilities',
    type: 'fill',
  });
  map.addLayer({
    id: 'health-facilities-outline',
    paint: {
      'line-color': '#ffffff',
    },
    source: 'health-facilities',
    type: 'line',
  });
  modifyCampFacilities(map);
}

export default function (map) {
  store.subscribe(() => modifyCampFacilities(map));
  addCampFacilities(map);
}
