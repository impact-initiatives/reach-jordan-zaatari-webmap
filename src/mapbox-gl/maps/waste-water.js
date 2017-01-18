import utils from '../utils/index.js';
import initGeolocation from '../interactions/geolocation.js';
import layers from '../layers/index.js';
import sources from '../sources/index.js';

function wasteWaterMap() {
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
  const pipes = sources.pipes({ map });
  const septicTanks = sources.septicTanks({ map });
  const steelTanks = sources.steelTanks({ map });

  const set1 = [districtBoundaries];
  const set2 = [...set1, blockBoundaries];
  const set3 = [...set2, campFacilities];
  const set4 = [...set3, steelTanks];
  const set5 = [...set4, septicTanks];
  const set6 = [...set5, pipes];

  Promise.all(set1).then(() => layers.districtBoundaries({ map }));
  Promise.all(set2).then(() => layers.blockBoundaries({ map }));
  Promise.all(set3).then(() => layers.campFacilities({ map }));
  Promise.all(set4).then(() => layers.steelTanks({ map }));
  Promise.all(set5).then(() => layers.septicTanks({ map }));
  Promise.all(set5).then(() => layers.campFacilitiesText({ map }));
  Promise.all(set5).then(() => layers.steelTanksText({ map }));
  Promise.all(set5).then(() => layers.septicTanksText({ map }));
  Promise.all(set5).then(() => layers.districtBoundariesText({ map, maxzoom: true }));
  Promise.all(set6).then(() => layers.pipes({ map }));
}

export default wasteWaterMap;
