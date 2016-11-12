import { StyleSheet } from 'aphrodisiac';
import COLORS from '../constants/colors.js';

export default StyleSheet.create({
  default: {
    backgroundColor: COLORS.DARK_GREY_100,
    color: COLORS.WHITE,
    height: '48px',
    width: '100%',
  },
  img: {
    cursor: 'pointer',
    padding: '12px',
  },
});
