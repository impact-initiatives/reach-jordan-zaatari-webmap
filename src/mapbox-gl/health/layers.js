import turfCenter from 'turf-center';
// import store from '../../store/index.js';
import { REACH } from '../../constants/resources.js';
import { WHITE } from '../../constants/colors.js';
import { ARABIC } from '../../constants/language.js';

function addDistrictCenters({ map }) {
  fetch(REACH.DISTRICT_BOUNDARIES)
    .then((response) => response.json())
    .then(({ features }) => {
      const points = features.map((feature) => {
        const center = turfCenter(feature);
        center.properties.nameEn = `D${feature.properties.Name.split(' ')[1]}`;
        center.properties.nameAr = Number(feature.properties.Name.split(' ')[1])
          .toLocaleString(ARABIC);
        return center;
      });
      map.addSource('district-points', {
        data: {
          type: 'FeatureCollection',
          features: points,
        },
        type: 'geojson',
      });
      map.addLayer({
        id: 'district-points-text',
        layout: {
          'text-field': '{nameEn}',
          'text-font': ['open-sans-regular'],
        },
        paint: {
          'text-halo-color': WHITE,
          'text-halo-width': 1.5,
        },
        source: 'district-points',
        type: 'symbol',
      });
    });
}

function addDistrictBoundaries({ map }) {
  map.addSource('district-boundaries', {
    data: REACH.DISTRICT_BOUNDARIES,
    type: 'geojson',
  });
  map.addLayer({
    id: 'district-line',
    paint: {
      'line-color': '#ffffff',
      'line-width': 3,
    },
    source: 'district-boundaries',
    type: 'line',
  });
}

function addBlockBoundaries({ map }) {
  map.addSource('block-boundaries', {
    data: REACH.BLOCK_BOUNDARIES,
    type: 'geojson',
  });
  map.addLayer({
    id: 'district-fill',
    paint: {
      'fill-color': '#808080',
      'fill-opacity': 0.25,
    },
    source: 'block-boundaries',
    type: 'fill',
  });
}

// export function modifyDistrictCenters({ map }) {
//   const state = store.getState();
//   map.removeLayer('district-points-text');
//   map.addLayer({
//     id: 'district-points-text',
//     layout: {
//       'text-field': state.lang === ARABIC ? '{nameAr}' : '{nameEn}',
//       'text-font': ['open-sans-regular'],
//     },
//     paint: {
//       'text-halo-color': WHITE,
//       'text-halo-width': 1.5,
//     },
//     source: 'district-points',
//     type: 'symbol',
//   });
// }

export default function ({ map }) {
  addDistrictCenters({ map });
  addDistrictBoundaries({ map });
  addBlockBoundaries({ map });
  // store.subscribe(() => modifyDistrictCenters({ map }));
}
