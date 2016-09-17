import { MAPBOX } from '../constants/resources.js';

export const BOUNDS = [
  [36.311, 32.284],
  [36.346, 32.303],
];

export const MAX_BOUNDS = [
  [BOUNDS[0][0] - 0.010, BOUNDS[0][1] - 0.010],
  [BOUNDS[1][0] + 0.010, BOUNDS[1][1] + 0.010],
];

export const ACCESS_TOKEN =
  'pk.eyJ1IjoicmVhY2hqb3JkYW4iLCJhIjoiY2luZnZqcnpoMDA5b3dkbTU3N3FwNDg2eiJ9.uPNAgOIg3ml7ZdmmfZjEdA';

export const CONTAINER = 'map';

export const STYLE = MAPBOX.STYLE.EMPTY;

export const BEARING = 21;
