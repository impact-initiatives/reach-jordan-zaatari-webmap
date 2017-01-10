import language from '../language.js';

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
    [language.EN]: 'NAME_EN',
    [language.AR]: 'NAME_AR',
  },
  propHours: {
    [language.EN]: 'HOURS_EN',
    [language.AR]: 'HOURS_AR',
  },
  propServices: {
    [language.EN]: 'HEALTH_EN',
    [language.AR]: 'HEALTH_AR',
  },
};
