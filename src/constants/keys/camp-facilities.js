import languages from '../languages.js';

const NAME_EN = 'NAME_EN';
const NAME_AR = 'NAME_AR';
const HOURS_EN = 'HOURS_EN';
const HOURS_AR = 'HOURS_AR';
const HEALTH_SERVICES_EN = 'HEALTH_EN';
const HEALTH_SERVICES_AR = 'HEALTH_AR';

const campFacilities = {
  name: {
    [languages.EN]: NAME_EN,
    [languages.AR]: NAME_AR,
  },
  hours: {
    [languages.EN]: HOURS_EN,
    [languages.AR]: HOURS_AR,
  },
  healthServices: {
    [languages.EN]: HEALTH_SERVICES_EN,
    [languages.AR]: HEALTH_SERVICES_AR,
  },
  NAME_EN,
  NAME_AR,
  HEALTH_TYPE: 'HEALTH_TYP',
  HEALTH_SERVICES_EN: 'HEALTH_EN',
};

export default campFacilities;
