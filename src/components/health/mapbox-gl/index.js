import React, { Component } from 'react';
import radium from 'radium';
import styles from '../../../styles/index.js';
import initMap from '../../../mapbox-gl/health/index.js';
import { CONTAINER } from '../../../constants/mapbox-gl.js';

class MapboxGL extends Component {

  componentDidMount() {
    initMap();
  }

  render() {
    return (
      <div id={CONTAINER}
           style={{ ...styles.flex.item.space, width: '100%' }} />
    );
  }

}

export default radium(MapboxGL);
