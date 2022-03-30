import './bookingb.css';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Button, Forms } from 'react-bootstrap';
import { useModal } from 'react-hooks-use-modal';
import DatePicker from 'react-datepicker';


/* form inspired from https://getbootstrap.com/docs/4.0/components/forms/ */

const BookingB = () => {
  return (
  <form>
  <form class="row g-3">
    <div class="col-md-4">
      <label for="inputFirstName">First Name</label>
      <input type="text" class="form-control" id="inputFirstName" placeholder="First Name"></input>
    </div>
    <div class="col-md-4">
      <label for="inputLastName">Last Name</label>
      <input type="text" class="form-control" id="inputLastName" placeholder="Last Name"></input>
    </div>
    </form>
  <form class="row g-3">
    <div class="col-md-4">
      <label for="inputEmail">Email</label>
      <input type="email" class="form-control" id="inputEmail" placeholder="example@gmail.com"></input>
    </div>
    <div class="col-md-4">
      <label for="inputDate">Date</label>
      <input type="text" class="form-control" data-date-format="mm/dd/yyyy" id="inputDate" placeholder="MM/DD/YYYY"></input>
    </div>
  </form>
  <form class="row g-3">
    <div class="col-md-4">
    <label for="inputAddress">Address</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St"></input>
   </div>
    <div class="col-md-2">
      <label for="inputCity">City</label>
      <input type="text" class="form-control" id="inputCity"></input>
    </div>
    <div class="col-md-2">
      <label for="inputProvince">Province</label>
      <select id="inputProvince" class="form-control">
        <option selected>Choose...</option>
        <option>ON</option>
        <option>QC</option>
        <option>MB</option>
        <option>SK</option>
        <option>AB</option>
        <option>BC</option>
        <option>YT</option>
        <option>NT</option>
        <option>NU</option>
        <option>NL</option>
        <option>PE</option>
        <option>NS</option>
        <option>NB</option>
      </select>
    </div>
    </form>
    <form class="row g-3">
    <div class="col-md-2">
      <label for="inputPostalCode">Postal Code</label>
      <input type="text" class="form-control" id="inputPostalCode"></input>
    </div>
  </form>
  <button type="submit" class="btn btn-primary">Submit</button>
  </form>
  );
}
export default BookingB;
