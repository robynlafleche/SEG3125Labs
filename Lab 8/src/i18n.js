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
              // Home page
              devisePart1: 'DIVIDE',
              devisePart2: 'CONQUER',
              devisePart3: 'ESCAPE',
              bookNow: 'Book Now',
              bookEscapeRoomText: 'Book an escape room today',

              // Booking page
              roomsAvailableTitle: "Here are the rooms available based off of your selections:",
              pickADate: "Pick a date",
              pickATime: "Pick a time",
              roomType: "Room Type",
              availability: "Availability",
              cancelABooking: "Cancel a Booking",
              indoorRoom: "Indoor Rooms", 
              outdoorRoom: "Outdoor Rooms",
              virtualRoom: "Virtual Rooms",
              fullyAvailable: "Fully Available",
              partiallyAvailable: "partially Available",
              escapeRoom: "Escape Room",
              date: "Date",
              time: "Time",
              numSlots: "Number of slots available",
              minParticipants: "Minimum Number of Participants",
              price: "Price per person",
              info: "Info",
              book: "Book",




              end: "End"
            }
          }
        },
        fr: {
          translation: {
            description: {
              // Home page
              devisePart1: 'DIVISER',
              devisePart2: 'CONQUERIR',
              devisePart3: 'ÉCHAPER',
              bookNow: 'Réservation Maintenant',   
              bookEscapeRoomText: 'Réservez une salle d\'évasion aujourd\'hui',           


              // Booking page
              roomsAvailableTitle: "Voici les chambres disponibles selon vos selections:",
              pickADate: "Choisir une date",
              pickATime: "Choisir une heure",
              roomType: "Type de salle",
              availability: "Disponibilité",
              cancelABooking: "Annulez une réservation",
              indoorRoom: "Salles à l'intérieur", 
              outdoorRoom: "Salles à l'extérieur",
              virtualRoom: "Salles virtuelles", 
              fullyAvailable: "Pleinement Disponible",
              partiallyAvailable: "Partiellement Disponible",                         
              escapeRoom: "Salle d'évasion",
              date: "Date",
              time: "Heure",
              numSlots: "Nombre de places disponibles",
              minParticipants: "Nombre Minimal de Participants",
              price: "Prix par personne",
              info: "Info",
              book: "Réservez",


              end: "Fin"
            }
          }
        }
      }
    });
  
  export default i18n;