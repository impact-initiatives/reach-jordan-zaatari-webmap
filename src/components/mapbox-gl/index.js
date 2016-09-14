import React, { Component } from 'react';
import radium from 'radium';
import styles from '../../styles/index.js';
import initMap from '../../mapbox-gl/index.js';

class MapboxGL extends Component {

  componentDidMount() {
    initMap();
  }

  render() {
    return (
      <div id="map"
           style={{ ...styles.flex.item.space, width: '100%' }} />
    );
  }

}

export default radium(MapboxGL);
