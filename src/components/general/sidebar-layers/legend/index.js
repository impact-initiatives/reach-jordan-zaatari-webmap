import React from 'react';
import messages from '../../../../translations/general.js';
import styles from '../../../../styles/index.js';
import * as colors from '../../../../constants/colors-general.js';
import * as colorsReach from '../../../../constants/colors.js';
import LegendItem from '../../../common/legend/legend-item.js';
import LegendItemLine from '../../../common/legend/legend-item-line.js';

export default ({ state }) => (
  <div>
    <div className={styles.flex.verticalLeft}>
      <div className={styles.component.legendTitle}>
        {messages.legend.title[state.lang]}
      </div>
      <LegendItem color={colors.WATER}
                  name={messages.legend.water[state.lang]} />
      <LegendItem color={colors.HEALTH}
                  name={messages.legend.health[state.lang]} />
      <LegendItem color={colors.REGISTRATION}
                  name={messages.legend.registration[state.lang]} />
      <LegendItem color={colors.SECURITY}
                  name={messages.legend.security[state.lang]} />
      <LegendItem color={colors.DISTRIBUTION}
                  name={messages.legend.distribution[state.lang]} />
      <LegendItem color={colors.WAREHOUSE}
                  name={messages.legend.warehouse[state.lang]} />
      <LegendItem color={colors.NGO_OFFICE}
                  name={messages.legend.ngoOffice[state.lang]} />
      <LegendItem color={colors.RECYCLING}
                  name={messages.legend.recycling[state.lang]} />
      <LegendItem color={colors.COMMUNITY_OFFICE}
                  name={messages.legend.communityOffice[state.lang]} />
      <LegendItem color={colors.COMMUNITY_CENTER}
                  name={messages.legend.communityCenter[state.lang]} />
      <LegendItem color={colors.SCHOOL}
                  name={messages.legend.school[state.lang]} />
      <LegendItem color={colors.KINDERGARTEN}
                  name={messages.legend.kindergarten[state.lang]} />
      <LegendItem color={colors.YOUTH_CENTER}
                  name={messages.legend.youthCenter[state.lang]} />
      <LegendItem color={colors.CHILD_FRIENDLY_SPACE}
                  name={messages.legend.childFriendlySpace[state.lang]} />
      <LegendItem color={colors.PLAYGROUND}
                  name={messages.legend.playground[state.lang]} />
      <LegendItem color={colors.RECREATION}
                  name={messages.legend.recreation[state.lang]} />
      <LegendItem color={colors.MOSQUE}
                  name={messages.legend.mosque[state.lang]} />
      <LegendItem color={colors.VACANT}
                  name={messages.legend.vacant[state.lang]} />
      <LegendItemLine color={colorsReach.DARK_GREY_100}
                      name={messages.legend.roadPaved[state.lang]} />
      <LegendItemLine color={colorsReach.BEIGE_100}
                      name={messages.legend.roadUnpaved[state.lang]} />
    </div>
  </div>
);
