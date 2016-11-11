import React from 'react';
import radium from 'radium';
import IntlMessageFormat from 'intl-messageformat';
import MESSAGES from '../../../translations/common.js';
import store from '../../../store/index.js';
import COLORS from '../../../constants/colors.js';
import { ENGLISH, ARABIC } from '../../../constants/language.js';
import styles from '../../../styles/index.js';

function onClickLanguage({ target }) {
  const { language } = target.dataset;
  store.dispatch({ type: (state) => ({
    ...state,
    lang: language,
  }) });
}

export default radium(({ state }) => (
  <div style={{
    ...styles.flex.horizontal.centerY,
    padding: '12px',
  }}>
    <div>
      {new IntlMessageFormat(MESSAGES.INFO.LANGUAGE[state.lang], state.lang).format()}
    </div>
    <div data-language={ENGLISH}
         onClick={onClickLanguage}
         style={{
           ...styles.button.small,
           color: state.lang === ENGLISH ? COLORS.LIGHT_BLUE : COLORS.WHITE,
           margin: '0px 12px',
         }}>
      {new IntlMessageFormat(MESSAGES.INFO.ENGLISH[state.lang], state.lang).format()}
    </div>
    <div data-language={ARABIC}
         onClick={onClickLanguage}
         style={{
           ...styles.button.small,
           color: state.lang === ARABIC ? COLORS.LIGHT_BLUE : COLORS.WHITE,
         }}>
      {new IntlMessageFormat(MESSAGES.INFO.ARABIC[state.lang], state.lang).format()}
    </div>
  </div>
));
