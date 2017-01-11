import React, { Component } from 'react';
import styles from '../../../styles/index.js';
import mapbox from '../../../constants/mapbox.js';

export default class extends Component {
  componentDidMount() {
    this.props.initMap();
  }
  render() {
    return (
      <div className={styles.component.map}
           id={mapbox.CONTAINER}>
        <style>{`
          .mapboxgl-popup { max-width: 320px; }
          .mapboxgl-ctrl-compass { display: none !important; }
          @media (max-width: 768px) {
            .mapboxgl-ctrl-zoom-in { display: none !important; }
            .mapboxgl-ctrl-zoom-out { display: none !important; }
          }
        `}</style>
      </div>
    );
  }
}
