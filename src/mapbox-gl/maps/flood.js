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
  Promise.all([
    sources.blockBoundaries({ map }),
    sources.campFacilities({ map }),
    sources.campFacilitiesPoint({ map }),
    sources.districtBoundaries({ map }),
    sources.districtBoundariesPoint({ map }),
    sources.floodLines({ map }),
    sources.floodPoints({ map }),
    sources.floodPointsUnicef({ map }),
    sources.floodWaterPath({ map }),
  ]).then(() => addLayers({ map }));
}

function addLayers({ map }) {
  layers.districtBoundaries({ map });
  layers.blockBoundaries({ map });
  layers.campFacilities({ map });
  layers.floodPoints({ map });
  layers.floodPointsUnicef({ map });
  layers.floodLines({ map });
  layers.floodWaterPath({ map });
  layers.campFacilitiesText({ map });
  layers.districtBoundariesText({ map, maxzoom: true });
}

export default floodMap;
