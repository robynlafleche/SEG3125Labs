import React from 'react';
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import { Container, Row, Col, Button, Form } from 'react-bootstrap';

import './contact.css';

import { useTranslation} from 'react-i18next';

const Contact = () => {

	const [inputs, setInputs] = useState({});

	const { t, i18n } = useTranslation();

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
	<h1>{t('description.getInTouch')}</h1>
	<Row>
		<Col xs={6}>
			<Form>
				<Form.Group controlId="form.Name">
					<Form.Label>{t('description.name')}</Form.Label>
					<Form.Control type="text" placeholder={t('description.enterName')} required />
				</Form.Group>
				<Form.Group controlId="form.Email">
					<Form.Label>{t('description.EmailAddress')}</Form.Label>
					<Form.Control type="email" placeholder="name@example.com" required/>
				</Form.Group>
				<Form.Group controlId="form.Textarea">
					<Form.Label>{t('description.comment')}</Form.Label>
					<Form.Control as="textarea" rows={3} required/>
				</Form.Group>
				<Button variant="primary" type="submit">
					{t('description.submitForm')}
				</Button>
			</Form>
		</Col>
		<Col xs={2}></Col>
		<Col xs={4}>
		<div className="contact">
			<p>613-938-0393</p>
			<p>{t('description.monFri')}</p>
			<p>{t('description.satSun')}</p>
			<p>escape6w22@gmail.com</p>
			<p>72 Laurier Ave. E, Ottawa, ON K1N 6N6, Ottawa, ON</p>
		</div>
		</Col>		
	</Row>
	
	</Container>
	
	);
};

export default Contact;