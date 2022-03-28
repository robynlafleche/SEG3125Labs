import React from 'react';
import { useState } from 'react';
import { Doughnut,Bar ,Pie} from 'react-chartjs-2';
import {CategoryScale} from 'chart.js'; import { Chart as ChartJS } from 'chart.js/auto'
import { Chart }            from 'react-chartjs-2'
import './admin.css'
// https://stackoverflow.com/questions/67727603/error-category-is-not-a-registered-scale
import 'bootstrap/dist/css/bootstrap.min.css';

import { Container, Row, Col, Image } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.css';

//how to import chartjs https://github.com/reactchartjs/react-chartjs-2

const Admin = () => {
	const state = {
		labels: ['Room 1', 'Room 2', 'Room 3',
				 'Room 4', 'Room 5','Room 6'],
		datasets: [
		  {
			label: 'Number of Room Booking for 2022 ',
			backgroundColor: [
				'rgba(75, 192, 192, 0.2)',
				'rgba(54, 162, 235, 0.2)',
				'rgba(153, 102, 255, 0.2)',
				'rgba(255, 99, 132, 0.2)',
				'rgba(255, 159, 64, 0.2)',
				'rgba(255, 205, 86, 0.2)',
				'rgba(201, 203, 207, 0.2)'
			  ],
			  borderColor: [
			  'rgb(75, 192, 192)',
				'rgb(54, 162, 235)',
				'rgb(153, 102, 255)',
				'rgb(255, 99, 132)',
				'rgb(255, 159, 64)',
				'rgb(255, 205, 86)',
				'rgb(201, 203, 207)'
			   
			  ],
			borderWidth: 5,
			data: [12,20,30,90,180,66]
		  }
		]
	  }
	  const state1 = {
		labels: ['Room 1', 'Room 2', 'Room 3',
		'Room 4', 'Room 5','Room 6'],
		datasets: [
		  {
			  
			label: 'Number of Succesful attempts of finishing the room',
			backgroundColor: [
				'rgba(75, 192, 192, 0.2)',
				'rgba(54, 162, 235, 0.2)',
				'rgba(153, 102, 255, 0.2)',
				'rgba(255, 99, 132, 0.2)',
				'rgba(255, 159, 64, 0.2)',
				'rgba(255, 205, 86, 0.2)',
				'rgba(201, 203, 207, 0.2)'
			  ],
			  borderColor: [
			  'rgb(75, 192, 192)',
				'rgb(54, 162, 235)',
				'rgb(153, 102, 255)',
				'rgb(255, 99, 132)',
				'rgb(255, 159, 64)',
				'rgb(255, 205, 86)',
				'rgb(201, 203, 207)'
			   
			  ],
			borderWidth: 5,
			data: [3,10,20,40,90,33]
		  }
		]
	  }
	  const state2 = {
		labels: ['Room 1', 'Room 2', 'Room 3',
		'Room 4', 'Room 5','Room 6'],
		datasets: [
		  {
			  
			label: 'Sales in $ per room',
			backgroundColor: [
				'rgba(75, 192, 192, 0.2)',
				'rgba(54, 162, 235, 0.2)',
				'rgba(153, 102, 255, 0.2)',
				'rgba(255, 99, 132, 0.2)',
				'rgba(255, 159, 64, 0.2)',
				'rgba(255, 205, 86, 0.2)',
				'rgba(201, 203, 207, 0.2)'
			  ],
			  borderColor: [
			  'rgb(75, 192, 192)',
				'rgb(54, 162, 235)',
				'rgb(153, 102, 255)',
				'rgb(255, 99, 132)',
				'rgb(255, 159, 64)',
				'rgb(255, 205, 86)',
				'rgb(201, 203, 207)'
			   
			  ],
			borderWidth: 5,
			data: [860,1260,700,3000,1200,800]
		  }
		]
	  }
	//code inspired from https://www.w3schools.com/react/react_forms.asp
	const [username, setusername] = useState(''); // '' is the initial state value
	const [password, setpassword] = useState(''); // '' is the initial state value
	const adminUsername = "admin";
	const adminPassword = 1234;
	const handleSubmit = (event) => {
		event.preventDefault();
		if(username == adminUsername && password == adminPassword){
			//alert("yeah")
			console.log("success");

			// code inspired from https://sebhastian.com/javascript-show-hide-div-onclick-toggle/
			document.getElementById("loginPage").style.display = "none"
			document.getElementById("pageOfAdminStats").style.display = "block"
		}
		else {
			alert("The username and/or password you have entered are incorrect. Please try again")
		}
	
	  }
return (
	<Container
	style={{
		display: 'flex',
		
		// justifyContent: 'Right',
		// alignItems: 'Right',
		// height: '100vh'
		
	}}

	>
		<Container id="loginPage" style={{}}>
			<h1>Admin Login Page</h1>
			<h2>Log into your admin account to view and schedule bookings</h2>
				<form onSubmit={handleSubmit}>
				{/* style for input fields inspired from https://www.w3schools.com/css/css_form.asp */}
					{/* <div style={{position:'absolute',padding:'30px'}}> */}
					<Row>
    					<label >Username</label>
    					<input  value={username} onInput={e => setusername(e.target.value)}/>
						<label >Password</label>
    					<input value={password} onInput={e => setpassword(e.target.value)}/>
						<button id="LoginButton" type="submit">Login</button>
				
					{/* </div>   */}
					</Row>
				</form>
		</Container>

		<Container id="pageOfAdminStats" style={{display:'none'}}>
			<h1 >Room Statistics</h1>
			<hr></hr>
			<h3>Number of Room Booking for 2022</h3>
			{/* code inspired from https://www.educative.io/edpresso/how-to-use-chartjs-to-create-charts-in-react and https://stackoverflow.com/a/59325530 */}
			<Row>
			<Bar
					data={state}
					options={{
						title:{
						display:true,
						text:'Average Rainfall per month',
						fontSize:20
						},
						legend:{
						display:true,
						position:'right'
						}
						
					}}
        
		 		  />
			</Row>
			
			<Row>
			<hr></hr>
    <Col><h3>Number of succesful attempts per room</h3></Col>
    <Col><h3>Sales in $ per room</h3></Col>
  </Row>
		<Row>
			<Col className="chart-container">
			<Pie
					data={state1}
					options={{
						title:{
						display:true,
						text:'',
						fontSize:20
						},
						legend:{
						display:true,
						position:'right'
						}
					}}
        
		 		  />
			</Col>
			<Col className="chart-container">
				<Pie
					data={state2}
					options={{
						title:{
						display:true,
						text:'',
						fontSize:20
						},
						legend:{
						display:true,
						position:'right'
						}
					}}
        
		 		  />
			</Col>
   
        		
      		</Row>

		

		</Container>


		{/* the tables */}

	</Container>
	);
};

export default Admin;