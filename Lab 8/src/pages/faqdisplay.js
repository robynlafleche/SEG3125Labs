import React from 'react'

function Faqdisplay ({faq, index}){
    return (
        <div 
            className={"faq" + (faq.open ? 'open' : '')}
            key={index}
        >
            <div className="faq-question">
                <h3>{faq.question}</h3>
            </div>
            <div className="faq-answer">
                <h5>{faq.answer}</h5>
            </div>
        </div>
    )
}

export default Faqdisplay