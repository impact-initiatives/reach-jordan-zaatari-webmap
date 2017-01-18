import utils from '../utils/index.js';
import initGeolocation from '../interactions/geolocation.js';
import layers from '../layers/index.js';
import sources from '../sources/index.js';

function districtMap() {
  const map = utils.createMap();
  map.on('style.load', () => loadStyles({ map }));
}

function loadStyles({ map }) {
  initGeolocation({ map });
  addSources({ map });
}

function addSources({ map }) {
  const districtBoundaries = sources.districtBoundaries({ map });

  const set1 = [districtBoundaries];

  Promise.all(set1).then(() => layers.districtBoundariesOperator({ map }));
  Promise.all(set1).then(() => layers.districtBoundariesText({ map, maxzoom: true }));
}

export default districtMap;
