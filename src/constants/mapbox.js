import urls from './urls.js';

const bounds = [
  [36.311, 32.282],
  [36.346, 32.303],
];

const mapbox = {
  STYLE: `${urls.RESOURCES}/mapbox/styles/empty-v9.json`,
  bounds,
  maxBounds: [
    [bounds[0][0] - 0.028, bounds[0][1] - 0.028],
    [bounds[1][0] + 0.028, bounds[1][1] + 0.028],
  ],
  CONTAINER: 'map',
  BEARING: 21,
  LABEL_ZOOM_BREAK: 16,
  PIPES_ZOOM_BREAK: 15,
  PIPES_SOLID_FREE_ZOOM_BREAK: 14,
  HOUSEHOLD_ZOOM_BREAK: 18,
  HOUSEHOLD_TEXT_ZOOM_BREAK: 19,
  MIN_ZOOM: 0,
  MAX_ZOOM: 22,
  MIN_TANK_SIZE: 2,
  MAX_STEEL_SIZE: 400,
  MAX_SEPTIC_SIZE: 200,
  RTL_TEXT_PLUGIN: './node_modules/@mapbox/mapbox-gl-rtl-text/mapbox-gl-rtl-text.js.min',
};

export default mapbox;
