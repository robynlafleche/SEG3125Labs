import React from 'react';
import { useState } from "react";
import './cart.css';



const Cart = () => {

	const [cartElements, setCartElements] = useState([
		{ description: 'Are there any birthday specials?', pricePerPlayer: '$20', numberOfPlayers: 4, price:'$80', id: 1 },
	  ])

	const title = "Here are the contents of your cart :";

	return (
		<div
		style={{
			justifyContent: 'Right',
			alignItems: 'Right',
			height: '100vh'
		}}>

		<h1>{ title }</h1>

		<table id="cartTable">
          <tr> 
            <th>Description</th>
            <th>Price per Player</th>
            <th>Number of Players</th>
            <th>Price</th>
            <th id="removeColumnPlaceholder">AA</th> 
          </tr>

        </table>


		</div>
	);
};

export default Cart;
