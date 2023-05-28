import React from 'react'

import { useTranslation} from 'react-i18next';

function Faqdisplay ({faq, index}){

    const { t, i18n } = useTranslation();

    return (
        <div 
            className={"faq" + (faq.open ? 'open' : '')}
            key={index}
        >
            <div className="faq-question">
                <h3>{t('description.question' + index)}</h3>
            </div>
            <div className="faq-answer">
                <h5>{t('description.answer' + index)}</h5>
            </div>
        </div>
    )
}

export default Faqdisplay