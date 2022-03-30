// import './booking.css';
import React, { Component } from 'react';
import { useState, useEffect  } from "react";
import { Button, Col, Container, Row, Dropdown } from 'react-bootstrap';
import Table from 'react-bootstrap/Table'
import { useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';

//table inspired by https://www.geeksforgeeks.org/how-to-create-a-table-in-reactjs

import { useTranslation} from 'react-i18next';


const Booking = () => {

  const [roomsAvailable, setRoomsAvailable] = useState([
    {RoomID: 1, RoomName: 'Space Adventure', PricePerPlayer: 30, RoomType: 'Indoor', DifficultyLevel: 4, MinimumNumberOfParticipants: 4}
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

  useEffect(() => {
    // Get all the rooms from the Database and display them:

    fetch("http://localhost:3001/getAllRoomsInfo")
      .then( res => res.json())
      .then((res) => {
        setRoomsAvailable(res)
        console.log(res);
      });

  }, []);

return (
	<Container>
	  <Row>
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
            <th>{t('description.time')}</th>
            <th>{t('description.minParticipants')}</th>
            <th>Room Type</th>
            <th>Difficulty Level</th>
            <th>{t('description.price')}</th>
            <th>{t('description.info')}</th>
            <th>{t('description.book')}</th>
            </tr>
          </thead>   
          {roomsAvailable.map((currentElem, id) => (
            <tbody key={id}>
              <tr>
              <td>{currentElem.RoomName}</td>
              <td>{currentElem.TimeslotDescription}</td>
              <td>{currentElem.MinimumNumberOfParticipants}</td>
              <td>{currentElem.RoomType}</td>
              <td>{currentElem.DifficultyLevel}/5</td>
              <td>${currentElem.PricePerPlayer}.00</td>
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
