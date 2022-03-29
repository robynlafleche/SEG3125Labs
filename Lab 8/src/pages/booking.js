// import './booking.css';
import React, { Component } from 'react';
import { useState } from "react";
import { Button, Col, Container, Row } from 'react-bootstrap';
import Table from 'react-bootstrap/Table'
import { useNavigate } from 'react-router-dom';

//table inspired by https://www.geeksforgeeks.org/how-to-create-a-table-in-reactjs



const Booking = () => {

  const [roomsAvailable, setRoomsAvailable] = useState([
    { room: "Space Adventure", time: "1:30 PM", slots: 0, price: "$20"},
    { room: "Jungle Escape", time: "2:00 PM", slots: 20, price: "$20"},
    { room: "Space Adventure", time: "2:30 PM", slots: 15, price: "$20"},
    { room: "Jungle Escape", time: "3:00 PM", slots: 10, price: "$20"}
  ])
  
  const title = "Here are the rooms available based off of your selections"

	let navigate = useNavigate();
	const pickDateButton = () => {
		let path = '/bookingb'
		navigate(path);
	}
return (
	<Container>
	  <Row>
      <Col><Button className="pick-date-button" onClick={pickDateButton} style={{position: 'relative', float: 'left'}}>Pick a date</Button></Col>
      <Col><Button className="pick-time-button"  style={{position: 'relative', float: 'left'}}>Pick a Time</Button></Col>
      <Col><Button className="pick-type-button"  style={{position: 'relative', float: 'left'}}>Room Type</Button></Col>
      <Col><Button className="pick-availibility-button"  style={{position: 'relative', float: 'left'}}>Availibility</Button></Col>
      <Col><Button className="pick-cancel-button"  style={{position: 'relative', float: 'left'}}>Cancel a Booking</Button></Col>
    </Row>
    <Row>
      <header>
        <h1>{title}</h1>
      </header>
    </Row>
    <Row>
      <Table bordered hover variant="dark" id="cartTable">
          <thead>
            <tr>
            <th>Escape Room</th>
            <th>Time</th>
            <th>Number of slots available</th>
            <th>Price</th>
            <th>Info</th>
            <th>Book</th>
            </tr>
          </thead>
          {roomsAvailable.map((currentElem, id) => (
            <tbody key={id}>
              <tr>
              <td>{currentElem.room}</td>
              <td>{currentElem.time}</td>
              <td>{currentElem.slots}</td>
              <td>{currentElem.price}</td>
              <td><Button id="Info">Info</Button></td>
              <td><Button id="Book" >Book</Button></td>
              </tr>
            </tbody>
          ))}	
        </Table>
      </Row>
  
    </Container>
	);
};

export default Booking;
