import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Index from './components/Navbar';

// import i18n (needs to be bundled ;))
import './i18n';

import { useTranslation, Trans } from 'react-i18next';

const lngs = {
	en: { nativeName: 'English' },
	fr: { nativeName: 'Francais' }
  };

function App() {
  return (
    <div className='App'>
      <Index defaultActiveKey="/home"/>
    </div> 
  );
}

export default App;
