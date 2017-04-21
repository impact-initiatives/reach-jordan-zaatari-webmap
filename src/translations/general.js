import * as language from '../constants/languages.js';

const healthMessages = {
  titleLong: {
    [language.EN]: 'General Infrastructure',
    [language.AR]: 'خدماتالمخیم',
  },
  titleShort: {
    [language.EN]: 'General',
    [language.AR]: 'خدمات',
  },
  info: [{
    [language.EN]: "This map was created in collaboration with UNHCR to provide humanitarian actors with a way to access information about the services offered in Za'atari.",
    [language.AR]: 'تم إنشاء هذه الخريطة بالتعاون مع المفوضية السامية  لتزويد المنظمات الإنسانية والجهات العاملة والمهن الطبية بوسيلة للوصول إلى معلومات عن الخدمات الصحية المقدمة في مخيم الزعتري',
  }, {
    [language.EN]: 'Service information was collated by UNHCR, and spatial data was collected by REACH and UNHCR.',
    [language.AR]: 'تم جمع معلومات الخدمات الصحية من قبل المفوضية السامية، وتم جمع البيانات الجغرافية من قبل ريتش والمفوضية',
  }],
  legend: {
    title: {
      [language.EN]: 'Legend',
      [language.AR]: 'مفتاح الخريطة',
    },
    water: {
      [language.EN]: 'Water Facilities',
      [language.AR]: 'مرافقالمیاه',
    },
    health: {
      [language.EN]: 'Health',
      [language.AR]: 'ال صحة',
    },
    registration: {
      [language.EN]: 'Registration',
      [language.AR]: 'التسجیل',
    },
    security: {
      [language.EN]: 'Security',
      [language.AR]: 'الحمایة',
    },
    distribution: {
      [language.EN]: 'Distribution Point',
      [language.AR]: 'نقطةالتوزیع',
    },
    warehouse: {
      [language.EN]: 'Warehouse',
      [language.AR]: 'مستودع',
    },
    ngoOffice: {
      [language.EN]: 'NGO Office',
      [language.AR]: 'مكاتبالمظمات',
    },
    recycling: {
      [language.EN]: 'Recycling Center',
      [language.AR]: 'مصنع إعادة التدوير',
    },
    communityOffice: {
      [language.EN]: 'Community Office',
      [language.AR]: 'مكتبالجمھور',
    },
    communityCenter: {
      [language.EN]: 'Community Center',
      [language.AR]: 'مركزالجمھور',
    },
    school: {
      [language.EN]: 'School',
      [language.AR]: 'مدرسة',
    },
    kindergarten: {
      [language.EN]: 'Kindergarten',
      [language.AR]: 'روضھ',
    },
    youthCenter: {
      [language.EN]: 'Youth Center',
      [language.AR]: 'مركزتمكینالشباب',
    },
    childFriendlySpace: {
      [language.EN]: 'Child Friendly Space',
      [language.AR]: 'مساحھ صدیقھ للطفل',
    },
    playground: {
      [language.EN]: 'Playground',
      [language.AR]: 'ملعب',
    },
    recreation: {
      [language.EN]: 'Recreation',
      [language.AR]: 'منطقةترفیھ',
    },
    mosque: {
      [language.EN]: 'Mosque',
      [language.AR]: 'مسجد',
    },
    vacant: {
      [language.EN]: 'Vacant',
      [language.AR]: 'مساحھشاغره',
    },
    underConstruction: {
      [language.EN]: 'Under Construction',
      [language.AR]: 'قیدالانشاء',
    },
    roadPaved: {
      [language.EN]: 'Paved Road',
      [language.AR]: 'طریقمعبد',
    },
    roadUnpaved: {
      [language.EN]: 'Unpaved Road',
      [language.AR]: 'طریق غیرمعبد',
    },
    assembly: {
      [language.EN]: 'Assembly Point',
      [language.AR]: 'نقطةالتجمع',
    },
  },
};

export default healthMessages;
