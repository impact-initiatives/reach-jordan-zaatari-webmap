import utils from '../utils/index.js';
import initGeolocation from '../interactions/geolocation.js';
import layers from '../layers/index.js';
import sources from '../sources/index.js';

function floodMap() {
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
  const floodLines = sources.floodLines({ map });
  const floodPoints = sources.floodPoints({ map });
  const floodWaterPath = sources.floodWaterPath({ map });

  const set1 = [districtBoundaries];
  const set2 = [...set1, blockBoundaries];
  const set3 = [...set2, campFacilities];
  const set4 = [...set3, floodLines];
  const set5 = [...set4, floodPoints];
  const set6 = [...set5, floodWaterPath];

  Promise.all(set1).then(() => layers.districtBoundaries({ map }));
  Promise.all(set2).then(() => layers.blockBoundaries({ map }));
  Promise.all(set3).then(() => layers.campFacilities({ map }));
  Promise.all(set4).then(() => layers.floodLines({ map }));
  Promise.all(set5).then(() => layers.floodPoints({ map }));
  Promise.all(set6).then(() => layers.floodWaterPath({ map }));
  Promise.all(set6).then(() => layers.campFacilitiesText({ map }));
  Promise.all(set6).then(() => layers.districtBoundariesText({ map, maxzoom: true }));
}

export default floodMap;
