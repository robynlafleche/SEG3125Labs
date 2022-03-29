//import React from 'react';
//import { useState } from "react";
//import { Container } from 'react-bootstrap';
//import Table from 'react-bootstrap/Table'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const Cart = () => {
  const form = useRef();

  const sendEmail = () => {
    //e.preventDefault();

	var tparams = {to_name : "Daniel", user_email: "dandave3612@gmail.com"};

    emailjs.send('service_6ktqc7j', 'template_dvnk0rb', tparams, 'xbzBATNrf9EPN6EPR')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  sendEmail();

};

export default Cart;
