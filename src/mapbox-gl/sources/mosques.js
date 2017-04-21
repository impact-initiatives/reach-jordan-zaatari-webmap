import { csvParseRows } from 'd3-dsv';
import turfHelpers from '@turf/helpers';
import * as columns from '../../constants/columns/mosques.js';
import reach from '../../constants/reach.js';
import utils from '../utils/index.js';
import sources from '../../constants/sources.js';

function sourceMosques({ map }) {
  return fetch(reach.MOSQUES)
    .then((response) => response.text())
    .then((csv) => {
      const [, ...data] = csvParseRows(csv);
      const features = data.map(csvToPoints);
      addSource({ features, map });
    });
}

function addSource({ features, map }) {
  utils.addSourceToMap({ features, map, sourceId: sources.MOSQUES });
}

function csvToPoints(row) {
  const longitude = Number(row[columns.longitude.COL]);
  const latitude = Number(row[columns.latitude.COL]);
  return turfHelpers.point([longitude, latitude], {
    [columns.id.KEY]: row[columns.id.COL],
    [columns.nameEn.KEY]: row[columns.nameEn.COL],
    [columns.nameAr.KEY]: row[columns.nameAr.COL],
  });
}

export default sourceMosques;
