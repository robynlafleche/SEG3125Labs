import '../i18n';

import { useTranslation, Trans } from 'react-i18next';


export function LanguageSelector(){
const lngs = {
	en: { nativeName: 'English' },
	fr: { nativeName: 'Francais' }
  };
  const { t, i18n } = useTranslation();
	return(
	
	<div>
	{Object.keys(lngs).map((lng) => (
            <button key={lng} style={{ fontWeight: i18n.resolvedLanguage === lng ? 'bold' : 'normal' }} type="submit" onClick={() => i18n.changeLanguage(lng)}>
              {lngs[lng].nativeName}
            </button>					
	))}
	</div>

	)
	}
export default LanguageSelector;