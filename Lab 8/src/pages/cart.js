import React from 'react';
import { useState } from "react";
import { Container } from 'react-bootstrap';
import Table from 'react-bootstrap/Table'

// import './cart.css';



const Cart = () => {

	const [cartElements, setCartElements] = useState([
		{ description: 'Jungle Escape', pricePerPlayer: '$20', numberOfPlayers: 4, price:'$80', id: 1 },
		{ description: 'Code Red', pricePerPlayer: '$20', numberOfPlayers: 8, price:'$160', id: 2 }
	  ])

	const title = "Here are the contents of your cart :";

	return (
		<Container>

			<header>
			<h1>{title}</h1>
			</header>

			<Table bordered hover id="cartTable">
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
			</Table>
		</Container>
	);
};

export default Cart;
