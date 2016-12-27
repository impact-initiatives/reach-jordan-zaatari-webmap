import { MAPBOX } from './resources.js';

export const BOUNDS = [
  [36.311, 32.282],
  [36.346, 32.303],
];

export const MAX_BOUNDS = [
  [BOUNDS[0][0] - 0.028, BOUNDS[0][1] - 0.028],
  [BOUNDS[1][0] + 0.028, BOUNDS[1][1] + 0.028],
];

export const CONTAINER = 'map';

export const STYLE = MAPBOX.STYLE.EMPTY;

export const BEARING = 21;

export default {
  attributionControl: false,
  container: CONTAINER,
  maxBounds: MAX_BOUNDS,
  style: STYLE,
};

export const LABEL_ZOOM_BREAK = 16;
export const PIPES_ZOOM_BREAK = 15;

export const MIN_ZOOM = 0;
export const MAX_ZOOM = 22;

export const NUM_HOUSEHOLDS = 17;
