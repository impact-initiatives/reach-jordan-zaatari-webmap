import { ARABIC, ENGLISH } from '../language.js';

export default {
  SOURCE_ID: 'camp-facilities',
  LAYER_ID_BASE: 'camp-facility-base',
  LAYER_ID_FILL: 'camp-facility-fill',
  PROP_TYPE: 'HEALTH_TYP',
  PROP_SERVICES_EN: 'HEALTH_EN',
  VALUE_HEALTH: 'Healthcare Facility',
  VALUE_CAMP_HEALTH: 'Camp Facility with Health Service',
  VALUE_CAMP: 'Camp Facility',
  VALUE_TRUE: 'Y',
  propName: {
    [ENGLISH]: 'NAME_EN',
    [ARABIC]: 'NAME_AR',
  },
  propHours: {
    [ENGLISH]: 'HOURS_EN',
    [ARABIC]: 'HOURS_AR',
  },
  propServices: {
    [ENGLISH]: 'HEALTH_EN',
    [ARABIC]: 'HEALTH_AR',
  },
};
