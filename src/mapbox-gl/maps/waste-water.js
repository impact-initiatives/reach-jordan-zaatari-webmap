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
  const pipesSeptic = sources.pipesSeptic({ map });
  const pipesSolidFree = sources.pipesSolidFree({ map });
  const septicTanks = sources.septicTanks({ map });
  const steelTanks = sources.steelTanks({ map });
  const households = sources.households({ map });

  const set1 = [districtBoundaries];
  const set2 = [...set1, blockBoundaries];
  const set3 = [...set2, campFacilities];
  const set4 = [...set3, steelTanks];
  const set5 = [...set4, septicTanks];
  const set6 = [...set5, households];
  const set7 = [...set6, pipesSolidFree];
  const set8 = [...set6, pipesSeptic];

  Promise.all(set1).then(() => layers.districtBoundaries({ map }));
  Promise.all(set2).then(() => layers.blockBoundaries({ map }));
  Promise.all(set3).then(() => layers.campFacilities({ map }));
  Promise.all(set4).then(() => layers.steelTanks({ map }));
  Promise.all(set5).then(() => layers.septicTanks({ map }));
  Promise.all(set6).then(() => layers.households({ map }));
  Promise.all(set6).then(() => layers.householdsText({ map }));
  Promise.all(set6).then(() => layers.campFacilitiesText({ map }));
  Promise.all(set6).then(() => layers.steelTanksText({ map }));
  Promise.all(set6).then(() => layers.septicTanksText({ map }));
  Promise.all(set6).then(() => layers.districtBoundariesText({ map, maxzoom: true }));
  Promise.all(set7).then(() => layers.pipesSolidFree({ map }));
  Promise.all(set8).then(() => layers.pipesSeptic({ map }));
}

export default wasteWaterMap;
