import { StyleSheet } from 'aphrodisiac';

export default StyleSheet.create({
  mobile: {
    display: 'inherit',
    '@media (max-width: 767px)': {
      display: 'none',
    },
  },
  desktop: {
    display: 'inherit',
    '@media (min-width: 768px)': {
      display: 'none',
    },
  },
});
