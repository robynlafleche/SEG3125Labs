import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: 'en',
    lng: 'en', // default language  (solution obtained from https://stackoverflow.com/questions/65921459/how-to-set-i18n-default-translation-language-in-react)
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
        en: {
          translation: {
            description: {
              devisePart1: 'DIVIDE',
              roomsAvailableTitle: "Here are the rooms available based off of your selections:"
            }
          }
        },
        fr: {
          translation: {
            description: {
              devisePart1: 'DIVISER',
              roomsAvailableTitle: "Voici les chambres disponibles selon vos selections:"
            }
          }
        }
      }
    });
  
  export default i18n;