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
  Promise.all([
    sources.districtBoundaries({ map }),
    sources.blockBoundaries({ map }),
    sources.blockBoundariesPoint({ map }),
  ]).then(() => addLayers({ map }));
}

function addLayers({ map }) {
  layers.districtBoundaries({ map });
  layers.blockBoundaries({ map });
  layers.blockBoundariesText({ map });
}

export default blockMap;
