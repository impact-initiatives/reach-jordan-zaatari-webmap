import { StyleSheet } from 'aphrodisiac';

export default {
  horizontal: StyleSheet.create({
    centerX: {
      display: 'flex',
      justifyContent: 'center',
    },
    centerY: {
      alignItems: 'center',
      display: 'flex',
    },
    baseline: {
      alignItems: 'baseline',
      display: 'flex',
    },
    right: {
      display: 'flex',
      justifyContent: 'flex-end',
    },
    spaceAround: {
      display: 'flex',
      justifyContent: 'space-around',
    },
    spaceBetween: {
      display: 'flex',
      justifyContent: 'space-between',
    },
  }),
  vertical: StyleSheet.create({
    normal: {
      display: 'flex',
      flexFlow: 'column nowrap',
      height: '100%',
    },
    center: {
      alignItems: 'center',
      display: 'flex',
      flexFlow: 'column nowrap',
    },
    left: {
      display: 'flex',
      flexFlow: 'column nowrap',
    },
  }),
  item: StyleSheet.create({
    divider: {
      borderBottom: '2px solid #e0e0e0',
      flex: '1 1 auto',
      margin: '0px 6px',
    },
    space: {
      flex: '1 1 auto',
    },
    fixed: {
      flex: '1 1 0',
    },
  }),
};
