import React from 'react';
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import { Container, Row, Col } from 'react-bootstrap';

import './contact.css';

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
	<Container>
	<h1>Get in touch with us</h1>
	<Row>
		<Col>
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
		</Col>

		<Col>
			<p>613-938-0393</p>
			<p>Monday-Friday 1pm - 9pm and Saturday-Sunday 1pm - 11pm</p>
			<p>escape6@gmail.com</p>
			<p>72 Laurier Ave. E, Ottawa, ON K1N 6N6, Ottawa, ON</p>
		</Col>		
	</Row>
	
	</Container>
	
	);
};

export default Contact;