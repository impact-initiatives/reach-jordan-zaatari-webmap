import * as language from '../constants/languages.js';

export default () => ({
  geoJson: {
    campFacilities: {
      layers: [],
      source: {},
    },
  },
  lang: navigator.language.includes('ar') ? language.AR : language.EN,
  sidebarHome: {
    open: false,
  },
  sidebarLayers: {
    open: false,
  },
  sidebarInfo: {
    open: false,
  },
  geolocation: {
    id: '',
  },
  filters: {
    health: {},
    wasteWater: {},
  },
  search: {
    wasteWater: '',
  },
});
