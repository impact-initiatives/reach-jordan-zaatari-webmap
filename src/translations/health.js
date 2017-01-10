import language from '../constants/language.js';

export default {
  TITLE_LONG: {
    [language.EN]: 'Health Facilities',
    [language.AR]: 'المرافق الصحية',
  },
  TITLE_SHORT: {
    [language.EN]: 'Health',
    [language.AR]: 'المرافق الصحية',
  },
  INFO: [{
    [language.EN]: "This map was created in collaboration with UNHCR to provide humanitarian actors and medical professionals with a way to access information about the health services offered in Za'atari.",
    [language.AR]: 'تم إنشاء هذه الخريطة بالتعاون مع المفوضية السامية  لتزويد المنظمات الإنسانية والجهات العاملة والمهن الطبية بوسيلة للوصول إلى معلومات عن الخدمات الصحية المقدمة في مخيم الزعتري',
  }, {
    [language.EN]: 'Health service information was collated by UNHCR, and spatial data was collected by REACH and UNHCR.',
    [language.AR]: 'تم جمع معلومات الخدمات الصحية من قبل المفوضية السامية، وتم جمع البيانات الجغرافية من قبل ريتش والمفوضية',
  }],
  LEGEND: {
    TITLE: {
      [language.EN]: 'Legend',
      [language.AR]: 'مفتاح الخريطة',
    },
    HEALTHCARE: {
      [language.EN]: 'Healthcare Facility',
      [language.AR]: 'مرافق الرعاية الصحية',
    },
    CAMP_HEALTH: {
      [language.EN]: 'Camp Facility w/ Health Services',
      [language.AR]: 'مرفق المخيم مع الخدمات الصحية',
    },
    CAMP: {
      [language.EN]: 'Camp Facility',
      [language.AR]: 'المرافق الخدمية في المخيم',
    },
  },
  FILTER: {
    TITLE: {
      [language.EN]: 'Filter by Service',
      [language.AR]: 'فرز حسب نوع الخدمة',
    },
    RESET: {
      [language.EN]: 'reset',
      [language.AR]: 'إعادة تعيين',
    },
    ACUTE_CHRONIC: {
      [language.EN]: 'Acute / Chronic Conditions',
      [language.AR]: 'الحالات المزمنة والشديدة',
    },
    DENTIST: {
      [language.EN]: 'Dentist',
      [language.AR]: 'طبيب الأسنان',
    },
    ORT: {
      [language.EN]: 'Oral Rehydration Therapy',
      [language.AR]: 'علاج الجفاف بالفم',
    },
    EMERGENCY: {
      [language.EN]: 'Emergency',
      [language.AR]: 'حالة طوارئ',
    },
    GBV: {
      [language.EN]: 'Gender-based Violence',
      [language.AR]: 'العنف القائم على نوع الجنس',
    },
    MALNUTRITION: {
      [language.EN]: 'Malnutrition',
      [language.AR]: 'سوء التغذية',
    },
    PSYCHOTHERAPY: {
      [language.EN]: 'Psychotherapy',
      [language.AR]: 'العلاج النفسي',
    },
    PHYSIOTHERAPY: {
      [language.EN]: 'Physiotherapy',
      [language.AR]: 'العلاج الطبيعي',
    },
    REPRODUCTIVE: {
      [language.EN]: 'Reproductive Care',
      [language.AR]: 'العناية الإنجابية',
    },
    SECONDARY: {
      [language.EN]: 'Secondary Health Services',
      [language.AR]: 'الخدمات الصحية الثانوية',
    },
    VACCINATION: {
      [language.EN]: 'Vaccination',
      [language.AR]: 'التلقيح والمطاعيم',
    },
  },
  popup: {
    hours: {
      [language.EN]: 'Hours',
      [language.AR]: 'ساعات', // not verified
    },
    services: {
      [language.EN]: 'Services',
      [language.AR]: 'خدمات', // not verified
    },
  },
};
