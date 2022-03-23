import './booking.css';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'react-bootstrap';
import { useModal } from 'react-hooks-use-modal';
import { useNavigate } from 'react-router-dom';

//table inspired by https://www.geeksforgeeks.org/how-to-create-a-table-in-reactjs

const data = [
  { room: "Space Adventure", time: "1:30 PM", slots: 0, price: "$20"},
  { room: "Jungle Escape", time: "2:00 PM", slots: 20, price: "$20"},
  { room: "Space Adventure", time: "2:30 PM", slots: 15, price: "$20"},
  { room: "Jungle Escape", time: "3:00 PM", slots: 10, price: "$20"}
]


const Booking = () => {

	let navigate = useNavigate();
	const pickDateButton = () => {
		let path = '/bookingb'
		navigate(path);
	}
return (
	<div className="Booking-container">
	<Button className="pick-date-button" onClick={pickDateButton} style={{position: 'relative', float: 'left'}}>Pick a date</Button>
	<div className = "Booking-table">
      <table>
        <tr>
          <th>Escape Room</th>
          <th>Time</th>
          <th>Number of slots available</th>
          <th>Price</th>
          <th>Info</th>
          <th>Book</th>
        </tr>
        {data.map((val, key) => {
          return (
            <tr key={key}>
              <td>{val.room}</td>
              <td>{val.time}</td>
              <td>{val.slots}</td>
              <td>{val.price}</td>
              <td><Button id="Info">Info</Button></td>
              <td><Button id="Book" >Book</Button></td>
            </tr>
          )
        })}
      </table>
    </div>
    </div>
	);
};

export default Booking;
