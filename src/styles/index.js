export default {
  font: {
    default: '"Helvetica Neue", Helvetica, Arial, sans-serif',
  },
  flex: {
    horizontal: {
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
    },
    item: {
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
    },
    vertical: {
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
    },
  },
  link: {
    active: { color: '#288fb2' },
    default: { cursor: 'default' },
    disabled: { cursor: 'not-allowed' },
    pointer: { cursor: 'pointer' },
  },
};

export function getHeightTransitionStyle({ visible }) {
  return {
    maxHeight: visible ? document.body.scrollHeight : '0px',
    opacity: visible ? 1 : 0,
    overflow: 'hidden',
    pointerEvents: visible ? 'initial' : 'none',
    transitionDuration: '500ms',
  };
}
