export function getHeightTransitionStyle({ visible }) {
  return {
    maxHeight: visible ? document.body.scrollHeight : '0px',
    // opacity: visible ? 1 : 0,
    overflowY: 'hidden',
    pointerEvents: visible ? 'initial' : 'none',
    transitionDuration: '500ms',
  };
}

export function getWidthTransitionStyle({ visible }) {
  return {
    maxWidth: visible ? document.body.scrollWidth : '0px',
    // opacity: visible ? 1 : 0,
    overflowX: 'hidden',
    pointerEvents: visible ? 'initial' : 'none',
    transitionDuration: '500ms',
  };
}
