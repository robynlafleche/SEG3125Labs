import './bookingb.css';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Button, Forms } from 'react-bootstrap';
import { useModal } from 'react-hooks-use-modal';
import DatePicker from 'react-datepicker';
import $ from 'jquery';


/* form inspired from https://getbootstrap.com/docs/4.0/components/forms/ */

$(function () {
  $('#inputDate').datetimepicker();
});

const BookingB = () => {
  return (
  <body>
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
      <label for="inputTime">Time</label>
      <select id="inputTime" class="form-control">
        <option selected>Choose...</option>
        <option>"11:00AM"</option>
        <option>"12:00PM"</option>
        <option>"1:30PM"</option>
        <option>"2:00PM"</option>
        <option>"3:30PM"</option>
        <option>"5:00PM"</option>
        <option>"7:00PM"</option>
        </select>
    </div>
    <div class="col-md-2">
      <label for="inputDate">Date</label>
      <input type="date" class="form-control" data-date-format="mm/dd/yyyy" id="inputDate" placeholder="MM/DD/YYYY"></input>
    </div>
    </form>

    <form class="row g-3">
    <div class="col-md-2">
      <label for="inputGroupSize">Number of members</label>
      <input type="text" class="form-control" id="inputPostalCode"></input>
    </div>
  </form>
  <button type="submit" class="btn btn-primary">Submit</button>
  </form>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  </body>
  );
}
export default BookingB;
