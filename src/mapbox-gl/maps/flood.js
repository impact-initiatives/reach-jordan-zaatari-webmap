import utils from '../utils/index.js';
import initGeolocation from '../layers/geolocation.js';
import addDistrictOutline from '../layers/district-outline.js';
import addDistrictText from '../layers/district-text.js';
import addBlockFill from '../layers/block-fill.js';
import addCampFacilitiesBackground from '../layers/camp-facilities-background.js';
import addCampFacilitiesText from '../layers/camp-facilities-text.js';
import addFloodPointsFill from '../layers/flood-points-fill.js';
import addFloodLinesFill from '../layers/flood-lines-fill.js';
import addFloodPointsUnicefFill from '../layers/flood-points-unicef-fill.js';
import addFloodWaterPathFill from '../layers/flood-water-path-fill.js';

function loadStyles({ map }) {
  addDistrictOutline({ map });
  addDistrictText({ map, maxzoom: true });
  addBlockFill({ map });
  addCampFacilitiesBackground({ map });
  addCampFacilitiesText({ map });
  addFloodPointsUnicefFill({ map });
  addFloodPointsFill({ map });
  addFloodLinesFill({ map });
  addFloodWaterPathFill({ map });
  initGeolocation({ map });
}

export default function floodMap() {
  const map = utils.createMap();
  map.on('style.load', () => loadStyles({ map }));
}
