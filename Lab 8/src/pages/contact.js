import React from 'react';
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import { Container, Row, Col, Button, Form } from 'react-bootstrap';

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
	  alert("Your message has been received, Thank you for reaching out to our team. You should receive feedback withing 2-3 buisness days if a response from our team is necessary");
	}
return (
	<Container>
	<h1>Get in touch with us</h1>
	<Row>
		<Col xs={6}>
			<Form>
				<Form.Group controlId="form.Name">
					<Form.Label>Name</Form.Label>
					<Form.Control type="text" placeholder="Enter name" required />
				</Form.Group>
				<Form.Group controlId="form.Email">
					<Form.Label>Email address</Form.Label>
					<Form.Control type="email" placeholder="name@example.com" required/>
				</Form.Group>
				<Form.Group controlId="form.Textarea">
					<Form.Label>Comment</Form.Label>
					<Form.Control as="textarea" rows={3} required/>
				</Form.Group>
				<Button variant="primary" type="submit">
						Submit form
				</Button>
			</Form>
		</Col>
		<Col xs={2}></Col>
		<Col xs={4}>
		<div className="contact">
			<p>613-938-0393</p>
			<p>Monday-Friday 1pm - 9pm</p>
			<p>Saturday-Sunday 1pm - 11pm</p>
			<p>escape6@gmail.com</p>
			<p>72 Laurier Ave. E, Ottawa, ON K1N 6N6, Ottawa, ON</p>
		</div>
		</Col>		
	</Row>
	
	</Container>
	
	);
};

export default Contact;