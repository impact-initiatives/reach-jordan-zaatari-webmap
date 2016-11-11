import store from '../../store/index.js';

export default function () {
  store.dispatch({ type: (state) => ({
    ...state,
    sidebarHome: {
      ...state.sidebarHome,
      open: false,
    },
    sidebarLayers: {
      ...state.sidebarLayers,
      open: false,
    },
    sidebarInfo: {
      ...state.sidebarInfo,
      open: false,
    },
  }) });
}
