import React from 'react';
import { useState } from "react";

const Contact = () => {

	const [inputs, setInputs] = useState({});

	const handleChange = (event) => {
	  const name = event.target.name;
	  const value = event.target.value;
	  setInputs(values => ({...values, [name]: value}))
	}
  
	const handleSubmit = (event) => {
	  event.preventDefault();
	  alert(inputs);
	}
return (
	<div
	style={{
		display: 'grid',
		justifyContent: 'Right',
		alignItems: 'Right',
		height: '100vh'
	}}
	>
	<h1>Get in touch with us</h1>
	<form onSubmit={handleSubmit}>
      <label>Enter your name:
      <input 
        type="text" 
        name="username" 
        value={inputs.username || ""} 
        onChange={handleChange}
      /><br></br>
      </label>
      <label>Enter your email:
        <input 
          type="text" 
          name="email" 
          value={inputs.email || ""} 
          onChange={handleChange}
        />
        </label>
		<br></br>

		<label>Enter your message:
        <textarea 
          type="text" 
          name="message" 
          value={inputs.message || ""} 
          onChange={handleChange}
        />
        </label>
		<br></br>
        <input type="submit" />
    </form>

	<p>613-938-0393</p>
	<p>Monday-Friday 1pm - 9pm and Saturday-Sunday 1pm - 11pm</p>
	<p>escape6@gmail.com</p>
	<p>72 Laurier Ave. E, Ottawa, ON K1N 6N6, Ottawa, ON</p>
	</div>
	
	);
};

export default Contact;