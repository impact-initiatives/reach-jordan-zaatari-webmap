import { StyleSheet } from 'aphrodisiac';
import COLORS from '../constants/colors.js';

const option = StyleSheet.create({
  default: {
    backgroundColor: COLORS.DARK_GREY_50,
    color: COLORS.WHITE,
    height: '100%',
    position: 'absolute',
    overflowX: 'hidden',
    transitionDuration: '250ms',
    width: '75%',
    zIndex: 1,
  },
  open: {
    maxWidth: '400px',
    pointerEvents: 'initial',
  },
  closed: {
    maxWidth: '0px',
    pointerEvents: 'none',
  },
});

const left = StyleSheet.create({
  english: {
    left: '0px',
  },
  arabic: {
    right: '0px',
  },
});

const right = StyleSheet.create({
  english: {
    right: '0px',
  },
  arabic: {
    left: '0px',
  },
});

export default {
  option,
  left,
  right,
};
