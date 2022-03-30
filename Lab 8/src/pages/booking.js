// import './booking.css';
import React, { Component } from 'react';
import { useState } from "react";
import { Button, Col, Container, Row, Dropdown } from 'react-bootstrap';
import Table from 'react-bootstrap/Table'
import { useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';

//table inspired by https://www.geeksforgeeks.org/how-to-create-a-table-in-reactjs



const Booking = () => {

  const [roomsAvailable, setRoomsAvailable] = useState([
    { room: "Space Adventure", date: "Mar 30th 2022", time: "1:30 PM", slots: 0, price: "$20"},
    { room: "Jungle Escape", date: "Mar 30th 2022", time: "2:00 PM", slots: 20, price: "$20"},
    { room: "Space Adventure", date: "Mar 30th 2022", time: "2:30 PM", slots: 15, price: "$20"},
    { room: "Jungle Escape", date: "Mar 30th 2022", time: "3:00 PM", slots: 10, price: "$20"}
  ])
  
  const title = "Here are the rooms available based off of your selections"

	let navigate = useNavigate();
	const pickDateButton = () => {
		let path = '/bookingb'
		navigate(path);
	}
  const pickTimeButton = () => {
    let path = '/bookingb'
    navigate(path);
  }
  const pickRoomType = () => {
    let path = '/rooms'
    navigate(path);
  }


return (
	<Container>
	  <Row>
      <Col><Button className="pick-date-button" onClick={pickDateButton} style={{position: 'relative', float: 'left'}}>Pick a date</Button></Col>
      <Col><Button className="pick-time-button"  style={{position: 'relative', float: 'left'}}>Pick a Time</Button></Col>
      <Col>
        <Dropdown>
          <Dropdown.Toggle variant="success" style={{position: 'relative', float: 'left'}} className='pick-type-button'>
          Room Type
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Indoor Rooms</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Outdoor Rooms</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Virtual Rooms</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Col>
      <Col>
      <Dropdown>
          <Dropdown.Toggle variant="success" style={{position: 'relative', float: 'left'}} className='pick-availibility-button'>
          Availibility
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Fully Available</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Partially Available</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Col>
      <Col><Button className="pick-time-button"  onClick = {pickTimeButton} style={{position: 'relative', float: 'left'}}>Pick a Time</Button></Col>
      <Col><Button className="pick-type-button" onClick={pickRoomType} style={{position: 'relative', float: 'left'}}>Room Type</Button></Col>
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
            <th>Date</th>
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
              <td>{currentElem.date}</td>
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
