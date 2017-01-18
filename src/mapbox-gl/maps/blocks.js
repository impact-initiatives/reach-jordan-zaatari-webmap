import utils from '../utils/index.js';
import initGeolocation from '../interactions/geolocation.js';
import layers from '../layers/index.js';
import sources from '../sources/index.js';

function blockMap() {
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

  const set1 = [districtBoundaries];
  const set2 = [...set1, blockBoundaries];

  Promise.all(set1).then(() => layers.districtBoundaries({ map }));
  Promise.all(set2).then(() => layers.blockBoundaries({ map }));
  Promise.all(set2).then(() => layers.blockBoundariesText({ map, maxzoom: true }));
}

export default blockMap;
