import React from 'react';
import styles from '../../../styles/index.js';

function onClick({ target }) {
  const { url } = target.dataset;
  location.href = url;
}

export default ({ icon, name, url }) => (
  <div className={styles.flex.verticalLeftStretch}>
    <div className={`${styles.flex.horizontalCenterY} ${styles.component.homeItem}`}
         data-url={url}
         onClick={onClick}>
      <img alt={url}
           className={styles.inline.padding12}
           data-url={url}
           src={icon} />
      <div className={location.hash.split('?')[0] === url ? styles.inline.colorLightBlue :
        styles.inline.colorWhite}
           data-url={url}>
        {name}
      </div>
    </div>
  </div>
);
