import { ENGLISH, ARABIC } from '../constants/language.js';

export default () => ({
  geoJson: {
    campFacilities: {
      layers: [],
      source: {},
    },
  },
  lang: navigator.language.includes('ar') ? ARABIC : ENGLISH,
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
});
