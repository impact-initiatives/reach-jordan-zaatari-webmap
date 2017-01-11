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
  MIN_ZOOM: 0,
  MAX_ZOOM: 22,
};

export default mapbox;
