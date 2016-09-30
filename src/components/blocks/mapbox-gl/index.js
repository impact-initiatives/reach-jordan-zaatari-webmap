import React, { Component } from 'react';
import radium from 'radium';
import styles from '../../../styles/index.js';
import initMap from '../../../mapbox-gl/maps/blocks/index.js';
import { CONTAINER } from '../../../constants/mapbox-gl.js';
import { isMobile } from '../../../constants/browser.js';

class MapboxGL extends Component {

  componentDidMount() {
    initMap();
  }

  render() {
    return (
      <div id={CONTAINER}
           style={{
             ...styles.flex.item.space,
             width: '100%',
             zIndex: '0',
           }}>
        <style>{`
          .mapboxgl-popup { max-width: 320px; }
        `}</style>
        <style>
          {'.mapboxgl-ctrl-compass { display: none !important; }'}
        </style>
        {isMobile() ? (
          <style>
            {'.mapboxgl-ctrl-zoom-in { display: none !important; }'}
          </style>
        ) : null}
        {isMobile() ? (
          <style>
            {'.mapboxgl-ctrl-zoom-out { display: none !important; }'}
          </style>
        ) : null}
      </div>
    );
  }

}

export default radium(MapboxGL);
