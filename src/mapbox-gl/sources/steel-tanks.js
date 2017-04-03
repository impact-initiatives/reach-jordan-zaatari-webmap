import { csvParseRows } from 'd3-dsv';
import turfHelpers from '@turf/helpers';
import * as columns from '../../constants/columns/steel.js';
import reach from '../../constants/reach.js';
import utils from '../utils/index.js';
import sources from '../../constants/sources.js';

function sourceSteelTanks({ map }) {
  return fetch(reach.STEEL_TANKS)
    .then((response) => response.text())
    .then((csv) => {
      const [, ...data] = csvParseRows(csv);
      const features = data.map(csvToPoints);
      addSource({ features, map });
    });
}

function addSource({ features, map }) {
  utils.addSourceToMap({ features, map, sourceId: sources.STEEL_TANKS });
}

function csvToPoints(row) {
  const longitude = Number(row[columns.longitude.COL]);
  const latitude = Number(row[columns.latitude.COL]);
  return turfHelpers.point([longitude, latitude], {
    [columns.id.KEY]: row[columns.id.COL],
    [columns.idShort.KEY]: row[columns.idShort.COL],
  });
}

export default sourceSteelTanks;
