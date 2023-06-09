import React from 'react';
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './faq.css';

import { Container} from 'react-bootstrap';
import Faqdisplay from './faqdisplay';

import { useTranslation} from 'react-i18next';

const FAQ = () => {

	const [faq, setFaq] = useState([
		{ 	question: 'Do you offer parking?', 
			answer: 'Yes we do have a small lot with 12 parking spaces available.', 
			open: true },
		{ 	question: 'What is the minimum age to play?', 
			answer: 'Players must be at least 12 years old to participate for indoor and outdoor escape rooms. There is no minimum age for virtual escape rooms.', 
			open: false },
		{ 	question: 'What method of payment do you accept?', 
			answer: 'We accept cash, debit, and credit card other than American Express.', 
			open: false },
		{ 	question: 'Do you have games in French also?', 
			answer: 'Yes, all of our games are offered in both official languages (French and English).', 
			open: false },
		{ 	question: 'Can I get a room without a booking?', 
			answer: 'Yes, we can book a game for you on the spot if there are games available. However, we recommend that you make a booking to guarantee availability.', 
			open: false },
		{ 	question: 'Can I cancel a reservation?', 
			answer: 'Yes. To do so, go to the Booking page and press on the Cancel Existing Booking button in the top right corner and follow the instructions.', 
			open: false },
		{ 	question: 'Is there a cancellation fee?', 
			answer: 'No, you may cancel your booking at any time. You will not be charged any penalty for doing so. However, we would appreciate it if you cancelled at least 48 hours in advance.', 
			open: false },				
		{ 	question: 'Can we still participate if someone does not show up?', 
			answer: 'Yes you can still participate even if you show up and have less than the minimum number of players required for an escape room. However, you will still be charged the same price and it will be more difficult for you to succeed.', 
			open: false },
		{ 	question: 'Are there any birthday specials?', 	
			answer: 'At this time there are no birthday specials. We are working to have birthday specials incorporated into our programs.', 
			open: false },
		{ 	question: 'How do I add a new player to an existing reservation?', 
			answer: 'If you booked your game with the Allow others to join option, you can add a new player by having them join the existing booking. Alternatively, you can show up to your game with extra players and we will add them on the spot, provided you do not exceed the maximum number of participants for the game.', 
			open: false },
	  ])

	  const { t, i18n } = useTranslation();

	

	return (
		<Container>
			<header>
			<h1>{t('description.FAQTitle')}</h1>
			</header>

			<div className="faqs">
				{faq.map((currentFAQ, i) => (
				<div key={i}>
					<Faqdisplay faq={currentFAQ} index={i} />
				</div>
			))}
			</div>
		</Container>
		

	);
};

export default FAQ;
