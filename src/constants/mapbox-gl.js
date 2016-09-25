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
