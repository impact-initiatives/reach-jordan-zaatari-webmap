import { DESKTOP_WIDTH_MIN } from '../constants/browser.js';
import COLORS from '../constants/colors.js';
import { ARABIC } from '../constants/language.js';

export function getHeightTransitionStyle({ visible }) {
  return {
    maxHeight: visible ? document.body.scrollHeight : '0px',
    overflowY: 'hidden',
    pointerEvents: visible ? 'initial' : 'none',
    transitionDuration: '500ms',
  };
}

export function getWidthTransitionStyle({ visible }) {
  return {
    maxWidth: visible ? document.body.scrollWidth : '0px',
    overflowX: 'hidden',
    pointerEvents: visible ? 'initial' : 'none',
    transitionDuration: '500ms',
  };
}

export function getSidebarRightStyle({ lang, visible }) {
  return {
    ...getWidthTransitionStyle({ visible }),
    backgroundColor: COLORS.DARK_GREY_50,
    color: COLORS.WHITE,
    height: '100%',
    position: 'absolute',
    [lang === ARABIC ? 'left' : 'right']: '0px',
    width: document.body.clientWidth > DESKTOP_WIDTH_MIN ? '400px' : '250px',
    zIndex: '1',
  };
}

export function getSidebarLeftStyle({ lang, visible }) {
  return {
    ...getWidthTransitionStyle({ visible }),
    backgroundColor: COLORS.DARK_GREY_50,
    color: COLORS.WHITE,
    height: '100%',
    position: 'absolute',
    [lang === ARABIC ? 'right' : 'left']: '0px',
    width: document.body.clientWidth > DESKTOP_WIDTH_MIN ? '400px' : '250px',
    zIndex: '1',
  };
}
