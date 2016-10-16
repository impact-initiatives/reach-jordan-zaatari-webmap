import React from 'react';
import radium from 'radium';
import IntlMessageFormat from 'intl-messageformat';
import MESSAGES from '../../../translations/common.js';

export default radium(({ messages, state }) => (
  <div>
    {messages.map((message, index) => (
      <div key={index}
           style={{ padding: '12px' }}>
        {new IntlMessageFormat(message[state.lang], state.lang).format()}
      </div>
    ))}
    <div style={{ padding: '12px' }}>
      {new IntlMessageFormat(MESSAGES.INFO.CURRENCY[state.lang], state.lang).format()}
    </div>
    <div style={{ padding: '12px' }}>
      {navigator.serviceWorker ? (
        new IntlMessageFormat(MESSAGES.INFO.OFFLINE_SUCCESS[state.lang], state.lang).format()
      ) : (
        <div>
          {new IntlMessageFormat(MESSAGES.INFO.OFFLINE_FAIL[state.lang], state.lang).format()}
          <a href="http://caniuse.com/serviceworker"
             style={{ color: '#3366bb' }}>
            caniuse.com/serviceworker
          </a>
        </div>
      )}
    </div>
    <div style={{ padding: '12px' }}>
      {new IntlMessageFormat(MESSAGES.INFO.CONTACT[state.lang], state.lang).format()}
      <a href="mailto:jordan.mapping@reach-initiative.org"
         style={{ color: '#3366bb' }}>
        jordan.mapping@reach-initiative.org
      </a>
    </div>
  </div>
));
