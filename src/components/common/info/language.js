import React from 'react';
import { css } from 'aphrodisiac';
import IntlMessageFormat from 'intl-messageformat';
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
  <div className={css(
         styles.flex.horizontal.centerY,
         styles.inline.padding12,
       )}>
    <div>
      {new IntlMessageFormat(MESSAGES.INFO.LANGUAGE[state.lang], state.lang).format()}
    </div>
    <div className={css(
           styles.button.small,
           state.lang === ENGLISH ? styles.color.lightBlue : styles.color.white,
           styles.inline.margin0x12,
         )}
         data-language={ENGLISH}
         onClick={onClickLanguage}>
      {new IntlMessageFormat(MESSAGES.INFO.ENGLISH[state.lang], state.lang).format()}
    </div>
    <div className={css(
           styles.button.small,
           state.lang === ARABIC ? styles.color.lightBlue : styles.color.white,
         )}
         data-language={ARABIC}
         onClick={onClickLanguage}>
      {new IntlMessageFormat(MESSAGES.INFO.ARABIC[state.lang], state.lang).format()}
    </div>
  </div>
);
