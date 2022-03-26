import React from 'react';
import './home.css';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Button } from 'react-bootstrap';

const Home = () => {
	let navigate = useNavigate();
	const bookNowButton = () => {
		let path = '/booking'
		navigate(path);
	}
return (
	<Container className="background-img">
	<h1>DIVIDE </h1>
	<h1>CONQUER </h1>
	<h1>ESCAPE</h1>
	<h2> Book an escape room today </h2>
	<Button variant="outline" onClick={bookNowButton}>Book Now</Button>;
	</Container>
	);
};

export default Home;