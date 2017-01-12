import language from '../constants/languages.js';

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
    flood: {},
    health: {},
    wasteWater: {},
  },
  search: {
    wasteWater: '',
  },
});
