import store from '../../store/index.js';

export default function () {
  store.dispatch({ type: (prevState) => {
    const state = JSON.parse(JSON.stringify(prevState));
    state.sidebarHome.open = false;
    state.sidebarLayers.open = false;
    state.sidebarInfo.open = false;
    return state;
  } });
}
