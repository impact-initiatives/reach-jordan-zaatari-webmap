import * as colors from '../../constants/colors-general.js';
import * as reachColors from '../../constants/colors.js';
import layers from '../../constants/layers.js';
import sources from '../../constants/sources.js';
import keys from '../../constants/keys/camp-facilities.js';
import * as values from '../../constants/values/camp-facilities-types.js';

function addLayer({ map }) {
  map.addLayer(getLayer());
}

function getLayer() {
  return {
    id: layers.CAMP_FACILITIES_GENERAL,
    paint: {
      'fill-color': {
        property: keys.TYPE,
        stops: [
          [values.WATER, colors.WATER],
          [values.HEALTH, colors.HEALTH],
          [values.REGISTRATION, colors.REGISTRATION],
          [values.SECURITY, colors.SECURITY],
          [values.DISTRIBUTION, colors.DISTRIBUTION],
          [values.WAREHOUSE, colors.WAREHOUSE],
          [values.NGO_OFFICE, colors.NGO_OFFICE],
          [values.RECYCLING, colors.RECYCLING],
          [values.COMMUNITY_OFFICE, colors.COMMUNITY_OFFICE],
          [values.COMMUNITY_CENTER, colors.COMMUNITY_CENTER],
          [values.SCHOOL, colors.SCHOOL],
          [values.KINDERGARTEN, colors.KINDERGARTEN],
          [values.YOUTH_CENTER, colors.YOUTH_CENTER],
          [values.CHILD_FRIENDLY_SPACE, colors.CHILD_FRIENDLY_SPACE],
          [values.PLAYGROUND, colors.PLAYGROUND],
          [values.RECREATION, colors.RECREATION],
          [values.MOSQUE, colors.MOSQUE],
          [values.VACANT, colors.VACANT],
        ],
        type: 'categorical',
      },
      'fill-opacity': 0.9,
      'fill-outline-color': reachColors.WHITE,
    },
    source: sources.CAMP_FACILITIES,
    type: 'fill',
  };
}

export default addLayer;
