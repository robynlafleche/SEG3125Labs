import emailjs from '@emailjs/browser';


const SendEmailToClient = (client_name, client_email) => {

var tparams = {to_name : client_name, user_email: client_email};

emailjs.send('service_6ktqc7j', 'template_dvnk0rb', tparams, 'xbzBATNrf9EPN6EPR')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
};


export default SendEmailToClient;