import React from 'react';
import './home.css';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const Home = () => {
	let navigate = useNavigate();
	const bookNowButton = () => {
		let path = '/booking'
		navigate(path);
	}
return (
	<div class="background-img">
	<h1>DIVIDE </h1>
	<h1>CONQUER </h1>
	<h1>ESCAPE</h1>
	<h2> Book an escape room today </h2>
	<Button variant="outline" onClick={bookNowButton}>Book Now</Button>;
	</div>
	);
};

export default Home;