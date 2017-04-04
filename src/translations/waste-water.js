import language from '../constants/languages.js';

const wasteWaterMessages = {
  titleLong: {
    [language.EN]: 'Waste Water Network',
    [language.AR]: 'شبكة الصرف الصحي',
  },
  titleShort: {
    [language.EN]: 'Waste Water',
    [language.AR]: 'المياه العادمة',
  },
  download: {
    header: {
      [language.EN]: 'PDF Maps',
      [language.AR]: 'خرائط PDF',
    },
    camp: {
      [language.EN]: 'Camp',
      [language.AR]: 'مخيم',
    },
    districts: {
      [language.EN]: 'Districts',
      [language.AR]: 'القطاعات',
    },
  },
  info: [{
    [language.EN]: "This map was created in collaboration with UNICEF to provide humanitarian actors with a way to access information about the wastewater services provided in Za'atari.",
    [language.AR]: 'تم إنشاء هذه الخريطة بالتعاون مع اليونيسيف لتزويد المنظمات الإنسانية بوسيلة للوصول إلى معلومات حول خدمات الصرف الصحي المقدمة في مخيم الزعتري.',
  }, {
    [language.EN]: 'Tank and pipe information collected by ACTED, JEN, and Oxfam. Spatial data collated by REACH and UNICEF.',
    [language.AR]: 'تم جمع المعلومات عن الخزانات والأنابيب من قبل كل من المنظمات أكتيد و جين و أوكسفام ، حيث تم جمع البيانات الجغرافية من قبل ريتش واليونيسيف.',
  }],
  legend: {
    title: {
      [language.EN]: 'Legend',
      [language.AR]: 'مفتاح الخريطة',
    },
    eight: {
      [language.EN]: '8m³ Septic Tank',
      [language.AR]: '8m³ خزانات الصرف الصحي حجم',
    },
    four: {
      [language.EN]: '4m³ Septic Tank',
      [language.AR]: '4m³ خزانات الصرف الصحي حجم',
    },
    two: {
      [language.EN]: '2m³ Septic Tank',
      [language.AR]: '2m³ خزانات الصرف الصحي حجم',
    },
    steelTanks: {
      [language.EN]: 'Connected Steel Tank',
      [language.AR]: 'خزان الفولاذمتصل متصل',
    },
    steelTanksUnconnected: {
      [language.EN]: 'Unconnected Steel Tank',
      [language.AR]: 'خزان الفولاذ غير متصل',
    },
    pipes: {
      [language.EN]: 'Pipe',
      [language.AR]: 'أنبوب',
    },
  },
  search: {
    title: {
      [language.EN]: 'Filter by Household',
      [language.AR]: 'فرز حسب المنزل',
    },
    reset: {
      [language.EN]: 'reset',
      [language.AR]: 'إعادة تعيين',
    },
    searchBar: {
      [language.EN]: 'Enter Household Address',
      [language.AR]: 'أدخل عنوان المنزل',
    },
  },
  filter: {
    title: {
      [language.EN]: 'Filter by Infrastructure',
      [language.AR]: 'فرز حسب البنية التحتية',
    },
    reset: {
      [language.EN]: 'reset',
      [language.AR]: 'إعادة تعيين',
    },
    septicTanks8m3: {
      [language.EN]: '8m³ Septic Tanks',
      [language.AR]: '8mخزان صرف صحي بحجم ³',
    },
    septicTanks4m3: {
      [language.EN]: '4m³ Septic Tanks',
      [language.AR]: '4m خزان صرف صحي بحجم ',
    },
    septicTanks2m3: {
      [language.EN]: '2m³ Septic Tanks',
      [language.AR]: '2m خزان صرف صحي بحجم ',
    },
    steelTanks: {
      [language.EN]: 'Steel Tanks',
      [language.AR]: 'خزانات الصلب',
    },
    pipesSeptic: {
      [language.EN]: 'Septic Pipes',
      [language.AR]: 'خزان صرف صحي أنابيب',
    },
    pipesSolidFree: {
      [language.EN]: 'Solid Free Pipes',
      [language.AR]: 'خزانات الصلب أنابيب',
    },
  },
};

export default wasteWaterMessages;
