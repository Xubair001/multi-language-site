import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import './index.css'
import arTranslation from './ar.json'; // Import Arabic translations
// import enTranslation from './ar.json'; 


const resources = {
  ar: {
    
    translation: arTranslation, // Add Arabic translations
  },
  // en: {
  //   translation: enTranslation, // Add English translations
  // },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en', // Default language
  interpolation: {
    escapeValue: false, // React already escapes by default
  },
});

export default i18n;