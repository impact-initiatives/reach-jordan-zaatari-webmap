import floodFilters from '../filters/flood.js';

const floodPoints = {
  type: {
    CONTINGENCY_TANK: floodFilters.CONTINGENCY_TANK,
    FACILITY: floodFilters.FACILITY,
    PRC_FULL: floodFilters.PRC_FULL,
    PRC_OVERFULL: floodFilters.PRC_OVERFULL,
    PRIVATE_TANK: floodFilters.PRIVATE_TANK,
    SHELTER: floodFilters.SHELTER,
    SHELTER_LIGHT: floodFilters.SHELTER_LIGHT,
  },
};

export default floodPoints;
