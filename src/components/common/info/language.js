import React from 'react';
import MESSAGES from '../../../translations/common.js';
import store from '../../../store/index.js';
import { ENGLISH, ARABIC } from '../../../constants/language.js';
import styles from '../../../styles/index.js';

function onClickLanguage({ target }) {
  const { language } = target.dataset;
  store.dispatch({ type: (state) => ({
    ...state,
    lang: language,
  }) });
}

export default ({ state }) => (
  <div className={`${styles.flex.horizontalCenterY} ${styles.inline.padding12}`}>
    <div>
      {MESSAGES.INFO.LANGUAGE[state.lang]}
    </div>
    <div className={[
      styles.component.buttonSmall,
      state.lang === ENGLISH ? styles.inline.colorLightBlue : styles.inline.colorWhite,
      styles.inline.margin0x12,
    ].join(' ')}
    data-language={ENGLISH}
    onClick={onClickLanguage}>
      {MESSAGES.INFO.ENGLISH[state.lang]}
    </div>
    <div className={[
      styles.component.buttonSmall,
      state.lang === ARABIC ? styles.inline.colorLightBlue : styles.inline.colorWhite,
    ].join(' ')}
    data-language={ARABIC}
    onClick={onClickLanguage}>
      {MESSAGES.INFO.ARABIC[state.lang]}
    </div>
  </div>
);
