import utils from '../utils/index.js';
import initGeolocation from '../interactions/geolocation.js';
import layers from '../layers/index.js';
import sources from '../sources/index.js';

function generalMap() {
  const map = utils.createMap();
  map.on('style.load', () => loadStyles({ map }));
}

function loadStyles({ map }) {
  initGeolocation({ map });
  addSources({ map });
}

function addSources({ map }) {
  const districtBoundaries = sources.districtBoundaries({ map });
  const blockBoundaries = sources.blockBoundaries({ map });
  const campFacilities = sources.campFacilities({ map });
  const roads = sources.roads({ map });

  const set1 = [districtBoundaries];
  const set2 = [...set1, blockBoundaries];
  const set3 = [...set2, roads];
  const set4 = [...set3, campFacilities];

  Promise.all(set1).then(() => layers.districtBoundaries({ map }));
  Promise.all(set2).then(() => layers.blockBoundaries({ map }));
  Promise.all(set3).then(() => layers.roads({ map }));
  Promise.all(set4).then(() => layers.campFacilitiesGeneral({ map }));
  Promise.all(set4).then(() => layers.roadsText({ map }));
  Promise.all(set4).then(() => layers.campFacilitiesText({ map }));
  Promise.all(set4).then(() => layers.blockBoundariesText({ map, minzoom: true }));
  Promise.all(set4).then(() => layers.districtBoundariesText({ map, maxzoom: true }));
}


export default generalMap;
