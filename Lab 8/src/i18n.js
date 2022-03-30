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

              //FAQ Page
              FAQTitle: 'FAQ Page',
              question0: 'Do you offer parking?', 
			        answer0: 'Yes we do have a small lot with 12 parking spaces available.',
             	question1: 'What is the minimum age to play?', 
              answer1: 'Players must be at least 12 years old to participate for indoor and outdoor escape rooms. There is no minimum age for virtual escape rooms.', 
             	question2: 'What method of payment do you accept?', 
              answer2: 'We accept cash, debit, and credit card other than American Express.', 
             	question3: 'Do you have games in French also?', 
              answer3: 'Yes, all of our games are offered in both official languages (French and English).', 
             	question4: 'Can I get a room without a booking?', 
              answer4: 'Yes, we can book a game for you on the spot if there are games available. However, we recommend that you make a booking to guarantee availability.',
             	question5: 'Can I cancel a reservation?', 
              answer5: 'Yes. To do so, fill out the contact us form with your booking information and we will cancel the booking for you.', 
              question6: 'Is there a cancellation fee?', 
              answer6: 'No, you may cancel your booking at any time. You will not be charged any penalty for doing so. However, we would appreciate it if you cancelled at least 48 hours in advance.', 			
              question7: 'Can we still participate if someone does not show up?', 
              answer7: 'Yes you can still participate even if you show up and have less than the minimum number of players required for an escape room. However, you will still be charged the same price and it will be more difficult for you to succeed.',
              question8: 'Are there any birthday specials?', 	
              answer8: 'At this time there are no birthday specials. We are working to have birthday specials incorporated into our programs.', 
              question9: 'How do I add a new player to an existing reservation?', 
              answer9: 'If you booked your game with the Allow others to join option, you can add a new player by having them join the existing booking. Alternatively, you can show up to your game with extra players and we will add them on the spot, provided you do not exceed the maximum number of participants for the game.', 



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

              //FAQ Page
              FAQTitle: 'Page de questions fréquentes',
              question0: 'Offrez-vous un stationnement ?', 
			        answer0: 'Oui, nous avons un petit terrain avec 12 places de stationnement disponibles.',
              question1: 'Quel est lâge minimum pour jouer ?', 
              answer1: 'Les joueurs doivent avoir au moins 12 ans pour participer aux jeux dévasion intérieurs et extérieurs. Il ny a pas dâge minimum pour les jeux dévasion virtuels.', 
             	question2: 'Quel mode de paiement acceptez-vous ?', 
              answer2: 'Nous acceptons de largent comptant, les cartes de débit et les cartes de crédit autres quAmerican Express.', 
             	question3: 'Avez-vous des jeux en français aussi?', 
              answer3: 'Oui, tous nos jeux sont offerts dans les deux langues officielles (français et anglais).', 
             	question4: 'Puis-je obtenir une chambre sans réservation ?', 
              answer4: 'Oui, nous pouvons réserver un jeu pour vous sur place sil y a des jeux disponibles. Cependant, nous vous recommandons de faire une réservation pour garantir la disponibilité.',
             	question5: 'Puis-je annuler une réservation ?', 
              answer5: 'Oui. Pour ce faire, remplissez le formulaire de contact avec vos informations de réservation et nous annulerons la réservation pour vous.', 
              question6: 'Y a-t-il des frais dannulation ?', 
              answer6: 'Non, vous pouvez annuler votre réservation à tout moment. Aucune pénalité ne vous sera facturée pour cela. Cependant, nous vous serions reconnaissants dannuler au moins 48 heures à lavance.', 			
              question7: 'Pouvons-nous quand même participer si quelquun ne se présente pas ?', 
              answer7: 'Oui, vous pouvez toujours participer même si vous vous présentez et que vous avez moins que le nombre minimum de joueurs requis pour une salle dévasion. Cependant, vous serez toujours facturé le même prix et il vous sera plus difficile de réussir.',
              question8: 'Y a-t-il des spéciaux danniversaire?', 	
              answer8: 'Pour le moment, il ny a pas de promotions danniversaire. Nous nous efforçons dintégrer des spéciaux danniversaire dans nos programmes.', 
              question9: 'Comment ajouter un nouveau joueur à une réservation existante?', 
              answer9: 'Si vous avez réservé votre jeu avec loption Autoriser les autres à se joindre, vous pouvez ajouter un nouveau joueur en le faisant rejoindre la réservation existante. Alternativement, vous pouvez vous présenter à votre jeu avec des joueurs supplémentaires et nous les ajouterons sur place, à condition que vous ne dépassiez pas le nombre maximum de participants pour le jeu.', 


              end: "Fin"
            }
          }
        }
      }
    });
  
  export default i18n;