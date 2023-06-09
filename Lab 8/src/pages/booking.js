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
	const book = () => {
		let path = '/bookingb'
		navigate(path);
	}
  const bookButton = () => {
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

  function bookFunction() {
    document.getElementById('title_en').value="Good Morning";
    document.getElementById('title_fr').value="Bonjour";
    document.getElementById('description_en').value="Bonjour";
    document.getElementById('description_fr').value="Bonjour";
    document.getElementById('program_id').value="6";
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
      </Col>
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
            <th>{t('description.roomType')}</th>
            <th>{t('description.diff')}</th>
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
              <td><Button onClick={pickRoomType} id="Info">{t('description.info')}</Button></td>
              <td><Button onClick={bookButton} id="Book" >{t('description.book')}</Button></td>
              </tr>
            </tbody>
          ))}	
        </Table>
      </Row>
  
    </Container>
	);
};

export default Booking;
