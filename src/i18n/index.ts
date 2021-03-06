import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import { default as en } from './en.json';
import { default as pl } from './pl.json';
import LocalStorage from '../utils/localStorage';

i18n.use(initReactI18next).init({
  resources: { en, pl },
  lng: (LocalStorage.getItem('APPLICATION_LANGUAGE') || { lang: 'en' }).lang,
  fallbackLng: 'en',
  debug: false,

  interpolation: {
    escapeValue: false
  }
});
export default i18n;
