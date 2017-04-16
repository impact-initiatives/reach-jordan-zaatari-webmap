import { csvParseRows } from 'd3-dsv';
import turfHelpers from '@turf/helpers';
import * as columns from '../../constants/columns/septic.js';
import reach from '../../constants/reach.js';
import utils from '../utils/index.js';
import sources from '../../constants/sources.js';

function sourceSepticTanks({ map }) {
  return fetch(reach.SEPTIC_TANKS)
    .then((response) => response.text())
    .then((csv) => {
      const [, ...data] = csvParseRows(csv);
      const features = data.map(csvToPoints).filter(Boolean);
      addSource({ features, map });
    });
}

function addSource({ features, map }) {
  utils.addSourceToMap({ features, map, sourceId: sources.SEPTIC_TANKS });
}

function csvToPoints(row) {
  const longitude = Number(row[columns.longitude.COL]);
  const latitude = Number(row[columns.latitude.COL]);
  if (!longitude || !latitude) return null;
  return turfHelpers.point([longitude, latitude], {
    [columns.id.KEY]: row[columns.id.COL],
    [columns.volume.KEY]: Math.floor(Number(row[columns.volume.COL])),
    [columns.ventilation1.KEY]: Number(row[columns.ventilation1.COL]),
    [columns.ventilation2.KEY]: Number(row[columns.ventilation2.COL]),
    [columns.steelId.KEY]: row[columns.steelId.COL],
    [columns.houses.KEY]: row[columns.houses.COL],
  });
}

export default sourceSepticTanks;
