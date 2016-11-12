import React, { Component } from 'react';
import { css } from 'aphrodisiac';
import styles from '../../../styles/index.js';
import { CONTAINER } from '../../../constants/mapbox-gl.js';

export default class extends Component {
  componentDidMount() {
    this.props.initMap();
  }
  render() {
    return (
      <div className={css(
             styles.flex.item.space,
             styles.inline.width100,
             styles.inline.zIndex0,
           )}
           id={CONTAINER}>
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
