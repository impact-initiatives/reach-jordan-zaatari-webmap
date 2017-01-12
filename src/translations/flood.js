import language from '../constants/languages.js';

const floodMessages = {
  titleLong: {
    [language.EN]: 'Flood Damage',
    [language.AR]: 'Flood Damage',
  },
  titleShort: {
    [language.EN]: 'Flood',
    [language.AR]: 'Flood',
  },
  info: [{
    [language.EN]: "This map was created in collaboration with UNHCR to provide humanitarian actors and medical professionals with a way to access information about flood damage in Za'atari.",
    [language.AR]: "This map was created in collaboration with UNHCR to provide humanitarian actors and medical professionals with a way to access information about flood damage in Za'atari.",
  }, {
    [language.EN]: 'Flood information was collated by UNICEF, ACTED, JEN, and OXFAM, and spatial data was collected by REACH and UNHCR.',
    [language.AR]: 'Flood information was collated by UNICEF, ACTED, JEN, and OXFAM, and spatial data was collected by REACH and UNHCR.',
  }],
  legend: {
    points: {
      [language.EN]: 'Legend - Points',
      [language.AR]: 'Legend - Points',
    },
    lines: {
      [language.EN]: 'Legend - Lines',
      [language.AR]: 'Legend - Lines',
    },
    flood: {
      [language.EN]: 'Flooding',
      [language.AR]: 'Flooding',
    },
    floodLight: {
      [language.EN]: 'Light Flooding',
      [language.AR]: 'Light Flooding',
    },
    mud: {
      [language.EN]: 'Muddy',
      [language.AR]: 'Muddy',
    },
    noAccess: {
      [language.EN]: 'No Access',
      [language.AR]: 'No Access',
    },
  },
  filter: {
    title: {
      [language.EN]: 'Filter by Service',
      [language.AR]: 'فرز حسب نوع الخدمة',
    },
    reset: {
      [language.EN]: 'reset',
      [language.AR]: 'إعادة تعيين',
    },
    contingencyTank: {
      [language.EN]: 'Contingency Tank',
      [language.AR]: 'Contingency Tank',
    },
    facility: {
      [language.EN]: 'Damaged Camp Facility',
      [language.AR]: 'Damaged Camp Facility',
    },
    flood: {
      [language.EN]: 'Flooding',
      [language.AR]: 'Flooding',
    },
    floodLight: {
      [language.EN]: 'Light Flooding',
      [language.AR]: 'Light Flooding',
    },
    mud: {
      [language.EN]: 'Muddy',
      [language.AR]: 'Muddy',
    },
    noAccess: {
      [language.EN]: 'No Access',
      [language.AR]: 'No Access',
    },
    prcFull: {
      [language.EN]: 'Septic Tank Full',
      [language.AR]: 'Septic Tank Full',
    },
    prcOverfull: {
      [language.EN]: 'Septic Tank Overfull',
      [language.AR]: 'Septic Tank Overfull',
    },
    privateTank: {
      [language.EN]: 'Private Tank',
      [language.AR]: 'Private Tank',
    },
    shelter: {
      [language.EN]: 'Damaged Shelter',
      [language.AR]: 'Damaged Shelter',
    },
    shelterLight: {
      [language.EN]: 'Lightly Damaged Shelter',
      [language.AR]: 'Lightly Damaged Shelter',
    },
  },
};

export default floodMessages;
