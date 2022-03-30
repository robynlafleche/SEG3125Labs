// import './booking.css';
import React, { Component } from 'react';
import { useState } from "react";
import { Button, Col, Container, Row, Dropdown } from 'react-bootstrap';
import Table from 'react-bootstrap/Table'
import { useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';

//table inspired by https://www.geeksforgeeks.org/how-to-create-a-table-in-reactjs

import { useTranslation} from 'react-i18next';


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

  const { t, i18n } = useTranslation();


return (
	<Container>
	  <Row>
      <Col><Button className="pick-date-button" onClick={pickDateButton} style={{position: 'relative', float: 'left'}}>{t('description.pickADate')}</Button></Col>
      <Col>
        <Dropdown>
          <Dropdown.Toggle variant="success" style={{position: 'relative', float: 'left'}} className='pick-type-button'>
          {t('description.roomType')}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">{t('description.indoorRoom')}</Dropdown.Item>
            <Dropdown.Item href="#/action-2">{t('description.outdoorRoom')}</Dropdown.Item>
            <Dropdown.Item href="#/action-3">{t('description.virtualRoom')}</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Col>
      <Col>
      <Dropdown>
          <Dropdown.Toggle variant="success" style={{position: 'relative', float: 'left'}} className='pick-availibility-button'>
          {t('description.availability')}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">{t('description.fullyAvailable')}</Dropdown.Item>
            <Dropdown.Item href="#/action-2">{t('description.partiallyAvailable')}</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Col>
      <Col><Button className="pick-time-button"  onClick = {pickTimeButton} style={{position: 'relative', float: 'left'}}>{t('description.pickATime')}</Button></Col>
      <Col><Button className="pick-type-button" onClick={pickRoomType} style={{position: 'relative', float: 'left'}}>{t('description.roomType')}</Button></Col>
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
            <th>{t('description.escapeRoom')}</th>
            <th>{t('description.date')}</th>
            <th>{t('description.time')}</th>
            <th>{t('description.numSlots')}</th>
            <th>{t('description.price')}</th>
            <th>{t('description.info')}</th>
            <th>{t('description.book')}</th>
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
              <td><Button id="Info">{t('description.info')}</Button></td>
              <td><Button id="Book" >{t('description.book')}</Button></td>
              </tr>
            </tbody>
          ))}	
        </Table>
      </Row>
  
    </Container>
	);
};

export default Booking;
