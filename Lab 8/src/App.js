import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Index from './components/Navbar';
import {Button} from 'react-bootstrap'


// import i18n (needs to be bundled ;))
import './i18n';

import { useTranslation} from 'react-i18next';

const lngs = {
	en: { nativeName: 'English' },
	fr: { nativeName: 'Francais' }
  };



function App() {

  const { t, i18n } = useTranslation();

  return (
    <div className='App'>
      {Object.keys(lngs).map((lng) => (
                  <button key={lng} style={{ fontWeight: i18n.resolvedLanguage === lng ? 'bold' : 'normal' }} type="submit" onClick={() => i18n.changeLanguage(lng)}>
                    {lngs[lng].nativeName}
                  </button>					
        ))}      
      <Index defaultActiveKey="/home"/>
    </div> 
  );
}

export default App;
