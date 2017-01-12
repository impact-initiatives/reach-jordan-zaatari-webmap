import language from '../constants/languages.js';

const districtMessages = {
  titleLong: {
    [language.EN]: 'District Boundaries',
    [language.AR]: 'حدود القطاعات',
  },
  titleShort: {
    [language.EN]: 'Districts',
    [language.AR]: 'القطاعات',
  },
  info: [{
    [language.EN]: 'This map displays the key implementing partners for each district. They serve as the focal points for information in their area.',
    [language.AR]: 'تعرض هذه الخارطة المنظمات الرئيسية العاملة في كل منطقة . أنهم بمثابة نقطة اتصال للحصول على معلومات في منطقتهم',
  }],
  legend: {
    title: {
      [language.EN]: 'Legend',
      [language.AR]: 'مفتاح الخريطة',
    },
    acted: {
      [language.EN]: 'ACTED',
      [language.AR]: 'منظمة أكتيد',
    },
    jen: {
      [language.EN]: 'JEN',
      [language.AR]: 'منظمة جين',
    },
    oxfam: {
      [language.EN]: 'Oxfam',
      [language.AR]: 'منظمة أوكسفام',
    },
  },
};

export default districtMessages;
