import React from 'react';
import { useState } from "react";
import { Container, Row, Button, Form, Col } from 'react-bootstrap';
import Table from 'react-bootstrap/Table'
import 'bootstrap/dist/css/bootstrap.min.css';

// import './cart.css';



const Cart = () => {

	const [cartElements, setCartElements] = useState([
		{ description: 'Jungle Escape', pricePerPlayer: '$20', numberOfPlayers: 4, price:'$80', id: 1 },
		{ description: 'Code Red', pricePerPlayer: '$20', numberOfPlayers: 8, price:'$160', id: 2 }
	  ])

	const title = "Here are the contents of your cart :";

	return (
		<Container>
			<Row>
				<Col xs={8}>
					`<div className = 'title'>
					<h1>{title}</h1>
					</div>

					<Table bordered hover variant="dark" id="cartTable">
						<thead>
							<tr>
							<th>Description</th>
							<th>Price per player</th>
							<th>Number of Players</th>
							<th>Price</th>
							</tr>
						</thead>
						{cartElements.map((currentElem) => (
							<tbody key={currentElem.id}>
								<tr>
								<td>{currentElem.description}</td>
								<td>{currentElem.pricePerPlayer}</td>
								<td>{currentElem.numberOfPlayers}</td>
								<td>{currentElem.price}</td>
								</tr>
							</tbody>
						))}	
						<tbody>
							<tr>
								<td colSpan={2}></td>
								<td>Cart Total</td>
								<td>$240</td>
							</tr>
						</tbody>
					</Table>`
				</Col>
				
				<Col>
				<h2>Payment information</h2>
				<Form>
					<Form.Group className="mb-3" controlId="formBasicEmail">
						<Form.Label>Name on Card</Form.Label>
						<Form.Control type="name" placeholder="John Doe" />
					</Form.Group>

					<Form.Group className="mb-3" controlId="formBasicNumber">
						<Form.Label>Card Number</Form.Label>
						<Form.Control type="number" placeholder="0000 0000 0000 0000" />
					</Form.Group>

					<Form.Group className="mb-3" controlId="formBasicDate">
						<Form.Label>Expiry Date</Form.Label>
						<Form.Control type="text" placeholder="MM/YY" />
					</Form.Group>

					<Form.Group className="mb-3" controlId="formBasicCVV">
						<Form.Label>CVV</Form.Label>
						<Form.Control type="text" placeholder="***" />
					</Form.Group>

					<Button variant="primary" type="submit">
						Add payment information
					</Button>
				</Form>
				</Col>
			</Row>			
		</Container>
	);
};

export default Cart;
