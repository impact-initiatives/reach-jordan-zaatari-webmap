import { MAPBOX } from './resources.js';

export const BOUNDS = [
  [36.311, 32.284],
  [36.346, 32.303],
];

export const MAX_BOUNDS = [
  [BOUNDS[0][0] - 0.014, BOUNDS[0][1] - 0.014],
  [BOUNDS[1][0] + 0.014, BOUNDS[1][1] + 0.014],
];

export const CONTAINER = 'map';

export const STYLE = MAPBOX.STYLE.EMPTY;

export const BEARING = 21;
