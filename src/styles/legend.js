import { StyleSheet } from 'aphrodisiac';
import COLORS from '../constants/colors.js';

export default StyleSheet.create({
  item: {
    border: `1px solid ${COLORS.WHITE}`,
    height: '18px',
    width: '27px',
  },
  itemLine: {
    border: `1px solid ${COLORS.WHITE}`,
    height: '2px',
    width: '27px',
  },
  title: {
    fontWeight: '600',
    marginTop: '6px',
    padding: '6px 24px',
  },
});
