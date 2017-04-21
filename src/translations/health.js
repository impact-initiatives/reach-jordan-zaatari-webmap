import * as language from '../constants/languages.js';

const healthMessages = {
  titleLong: {
    [language.EN]: 'Health Facilities',
    [language.AR]: 'المرافق الصحية',
  },
  titleShort: {
    [language.EN]: 'Health',
    [language.AR]: 'المرافق الصحية',
  },
  info: [{
    [language.EN]: "This map was created in collaboration with UNHCR to provide humanitarian actors and medical professionals with a way to access information about the health services offered in Za'atari.",
    [language.AR]: 'تم إنشاء هذه الخريطة بالتعاون مع المفوضية السامية  لتزويد المنظمات الإنسانية والجهات العاملة والمهن الطبية بوسيلة للوصول إلى معلومات عن الخدمات الصحية المقدمة في مخيم الزعتري',
  }, {
    [language.EN]: 'Health service information was collated by UNHCR, and spatial data was collected by REACH and UNHCR.',
    [language.AR]: 'تم جمع معلومات الخدمات الصحية من قبل المفوضية السامية، وتم جمع البيانات الجغرافية من قبل ريتش والمفوضية',
  }],
  legend: {
    title: {
      [language.EN]: 'Legend',
      [language.AR]: 'مفتاح الخريطة',
    },
    healthcare: {
      [language.EN]: 'Healthcare Facility',
      [language.AR]: 'مرافق الرعاية الصحية',
    },
    campHealth: {
      [language.EN]: 'Camp Facility w/ Health Services',
      [language.AR]: 'مرفق المخيم مع الخدمات الصحية',
    },
    camp: {
      [language.EN]: 'Camp Facility',
      [language.AR]: 'المرافق الخدمية في المخيم',
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
    acuteChronic: {
      [language.EN]: 'Acute / Chronic Conditions',
      [language.AR]: 'الحالات المزمنة والشديدة',
    },
    dentist: {
      [language.EN]: 'Dentist',
      [language.AR]: 'طبيب الأسنان',
    },
    ort: {
      [language.EN]: 'Oral Rehydration Therapy',
      [language.AR]: 'علاج الجفاف بالفم',
    },
    emergency: {
      [language.EN]: 'Emergency',
      [language.AR]: 'حالة طوارئ',
    },
    gbv: {
      [language.EN]: 'Gender-based Violence',
      [language.AR]: 'العنف القائم على نوع الجنس',
    },
    malnutrition: {
      [language.EN]: 'Malnutrition',
      [language.AR]: 'سوء التغذية',
    },
    psychotherapy: {
      [language.EN]: 'Psychotherapy',
      [language.AR]: 'العلاج النفسي',
    },
    physiotherapy: {
      [language.EN]: 'Physiotherapy',
      [language.AR]: 'العلاج الطبيعي',
    },
    reproductive: {
      [language.EN]: 'Reproductive Care',
      [language.AR]: 'العناية الإنجابية',
    },
    secondary: {
      [language.EN]: 'Secondary Health Services',
      [language.AR]: 'الخدمات الصحية الثانوية',
    },
    vaccination: {
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

export default healthMessages;
