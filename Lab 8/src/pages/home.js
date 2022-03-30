import React from 'react';
import './home.css';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Button } from 'react-bootstrap';

import { useTranslation} from 'react-i18next';

const lngs = {
	en: { nativeName: 'English' },
	fr: { nativeName: 'Francais' }
  };

const Home = () => {
	let navigate = useNavigate();
	const bookNowButton = () => {
		let path = '/booking'
		navigate(path);
	}

	const { t, i18n } = useTranslation();


return (

	<div className = 'backgroundImg'>
	<div className = 'home'>
	<h1>{t('description.devisePart1')}</h1>
	<h1>CONQUER </h1>
	<h1>ESCAPE</h1>
	</div>
	<h2> Book an escape room today </h2>
	<Button variant="outline" onClick={bookNowButton}>Book Now</Button>
	
	
	<div>
	{Object.keys(lngs).map((lng) => (
            <button key={lng} style={{ fontWeight: i18n.resolvedLanguage === lng ? 'bold' : 'normal' }} type="submit" onClick={() => i18n.changeLanguage(lng)}>
              {lngs[lng].nativeName}
            </button>					
	))}
	</div>

	</div>

	
	);
}

export default Home;