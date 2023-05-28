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
  <form autocomplete="on">
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
    <div class="col-md-2">
      <label for="inputDate">Date</label>
      <input type="date" class="form-control" data-date-format="mm/dd/yyyy" id="inputDate" placeholder="MM/DD/YYYY"></input>
    </div>
        <div class="col-md-2">
      <label for="inputGroupSize">Number of members</label>
      <input type="text" class="form-control" id="inputGroupSize"></input>
    </div>
    </form>

    <form class="row g-3">
    <div class="col-md-4">
      <label for="inputTeamName">Team Name</label>
      <input type="text" class="form-control" id="inputTeamName"></input>
    </div>
  </form>
  <button type="submit" class="btn btn-primary">Submit</button>
  </form>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  </body>
  );
}
export default BookingB;
