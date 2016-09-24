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
    Acute_Cond: false,
    Dentist: false,
    ORT: false,
    Emergency: false,
    GBV: false,
    Malnutriti: false,
    Psychother: false,
    Physiother: false,
    Reproducti: false,
    Secondary: false,
    Vaccinatio: false,
  },
});
