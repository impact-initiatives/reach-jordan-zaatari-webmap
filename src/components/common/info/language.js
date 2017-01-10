import React from 'react';
import MESSAGES from '../../../translations/common.js';
import store from '../../../store/index.js';
import language from '../../../constants/language.js';
import styles from '../../../styles/index.js';

function onClickLanguage({ target }) {
  const { lang } = target.dataset;
  store.dispatch({ type: (state) => ({
    ...state,
    lang,
  }) });
}

export default ({ state }) => (
  <div className={`${styles.flex.horizontalCenterY} ${styles.inline.padding12}`}>
    <div>
      {MESSAGES.INFO.LANGUAGE[state.lang]}
    </div>
    <div className={[
      styles.component.buttonSmall,
      state.lang === language.EN ? styles.inline.colorLightBlue : styles.inline.colorWhite,
      styles.inline.margin0x12,
    ].join(' ')}
    data-lang={language.EN}
    onClick={onClickLanguage}>
      {MESSAGES.INFO.ENGLISH[state.lang]}
    </div>
    <div className={[
      styles.component.buttonSmall,
      state.lang === language.AR ? styles.inline.colorLightBlue : styles.inline.colorWhite,
    ].join(' ')}
    data-lang={language.AR}
    onClick={onClickLanguage}>
      {MESSAGES.INFO.ARABIC[state.lang]}
    </div>
  </div>
);
