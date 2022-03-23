import React from 'react';
import { useState } from 'react';
import { Doughnut,Bar ,Pie} from 'react-chartjs-2';
import {CategoryScale} from 'chart.js'; import { Chart as ChartJS } from 'chart.js/auto'
import { Chart }            from 'react-chartjs-2'
// https://stackoverflow.com/questions/67727603/error-category-is-not-a-registered-scale

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
			data: [65, 59, 80, 81, 56,90]
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
			data: [30, 50, 15, 18, 56, 40]
		  }
		]
	  }
	//code inspired from https://www.w3schools.com/react/react_forms.asp
	const [username, setusername] = useState(''); // '' is the initial state value
	const [password, setpassword] = useState(''); // '' is the initial state value
	const adminUsername = "a";
	const adminPassword = "a";
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
	<div
	style={{
		display: 'flex',
		
		// justifyContent: 'Right',
		// alignItems: 'Right',
		// height: '100vh'
		
	}}

	>
		<div id="loginPage">
			<h1>Log into your admin account to view and schedule bookings</h1>
				<form onSubmit={handleSubmit}>
					<div>
    					<label>Username</label>
    					<input value={username} onInput={e => setusername(e.target.value)}/>
						<label>Password</label>
    					<input value={password} onInput={e => setpassword(e.target.value)}/>
    				</div>  
				<button type="submit">Login</button>
				</form>
		</div>

		<div id="pageOfAdminStats" style={{display:'none'}}>
			<h2>Room Statistics</h2>
			<h4>Number of Room Booking for 2022</h4>
			{/* code inspired from https://www.educative.io/edpresso/how-to-use-chartjs-to-create-charts-in-react and https://stackoverflow.com/a/59325530 */}
			<div class="chart-container" style={{position: 'relative', height:'40vh', width:'70vw', marginBottom:'300px'}}>
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
      		</div>
			  <div class="chart-container" style={{position: 'relative', height:'30vh', width:'30vw', marginBottom:'300px'}}>
			  <h4>Number of succesful attempts per room</h4>
        		<Pie
					data={state1}
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
      		</div>

			  <div>
			  <h4>The stats for Virtual Rooms</h4>
			  {/* table style from https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Styling_tables */}
			  <div>
			  <table style={{ tableLayout: 'fixed',
				
				borderCollapse: 'collapse',
				border: '3px solid purple',marginBottom:'30px',width:'400px' ,float:'left', marginRight:'50px'}}>
				<tr>
					<th style={{borderBottom: '1px solid black'}}>Company</th>
					<th style={{borderBottom: '1px solid black'}}>Contact</th>
					<th style={{borderBottom: '1px solid black'}}>Country</th>
				</tr>
				<tr style={{borderBottom: '1px solid black'}}>
					<td>Alfreds Futterkiste</td>
					<td>Maria Anders</td>
					<td>Germany</td>
				</tr>
				<tr style={{borderBottom: '1px solid black'}}>
					<td>Centro comercial Moctezuma</td>
					<td>Francisco Chang</td>
					<td>Mexico</td>
				</tr>
				</table>
				</div>
				<div>
				<table style={{ tableLayout: 'fixed',
				width: '100%',
				borderCollapse: 'collapse',
				border: '3px solid purple',marginBottom:'30px',width:'400px' ,float:'rirght', marginLeft:'100px'}}>
				<tr>
					<th style={{borderBottom: '1px solid black'}}>Company</th>
					<th style={{borderBottom: '1px solid black'}}>Contact</th>
					<th style={{borderBottom: '1px solid black'}}>Country</th>
				</tr>
				<tr style={{borderBottom: '1px solid black'}}>
					<td>Alfreds Futterkiste</td>
					<td>Maria Anders</td>
					<td>Germany</td>
				</tr>
				<tr style={{borderBottom: '1px solid black'}}>
					<td>Centro comercial Moctezuma</td>
					<td>Francisco Chang</td>
					<td>Mexico</td>
				</tr>
				</table>
				</div>
			  </div>

			  <div>
			  <h4>The stats for Outdoor Rooms</h4>
			  {/* table style from https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Styling_tables */}
			  <div>
			  <table style={{ tableLayout: 'fixed',
				
				borderCollapse: 'collapse',
				border: '3px solid purple',marginBottom:'30px',width:'400px' ,float:'left', marginRight:'50px'}}>
				<tr>
					<th style={{borderBottom: '1px solid black'}}>Company</th>
					<th style={{borderBottom: '1px solid black'}}>Contact</th>
					<th style={{borderBottom: '1px solid black'}}>Country</th>
				</tr>
				<tr style={{borderBottom: '1px solid black'}}>
					<td>Alfreds Futterkiste</td>
					<td>Maria Anders</td>
					<td>Germany</td>
				</tr>
				<tr style={{borderBottom: '1px solid black'}}>
					<td>Centro comercial Moctezuma</td>
					<td>Francisco Chang</td>
					<td>Mexico</td>
				</tr>
				</table>
				</div>
				<div>
				<table style={{ tableLayout: 'fixed',
				width: '100%',
				borderCollapse: 'collapse',
				border: '3px solid purple',marginBottom:'30px',width:'400px' ,float:'rirght', marginLeft:'100px'}}>
				<tr>
					<th style={{borderBottom: '1px solid black'}}>Company</th>
					<th style={{borderBottom: '1px solid black'}}>Contact</th>
					<th style={{borderBottom: '1px solid black'}}>Country</th>
				</tr>
				<tr style={{borderBottom: '1px solid black'}}>
					<td>Alfreds Futterkiste</td>
					<td>Maria Anders</td>
					<td>Germany</td>
				</tr>
				<tr style={{borderBottom: '1px solid black'}}>
					<td>Centro comercial Moctezuma</td>
					<td>Francisco Chang</td>
					<td>Mexico</td>
				</tr>
				</table>
				</div>
			  </div>

			  <div>
			  <h4>The stats for Indoor Rooms</h4>
			  {/* table style from https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Styling_tables */}
			  <div>
			  <table style={{ tableLayout: 'fixed',
				
				borderCollapse: 'collapse',
				border: '3px solid purple',marginBottom:'30px',width:'400px' ,float:'left', marginRight:'50px'}}>
				<tr>
					<th style={{borderBottom: '1px solid black'}}>Company</th>
					<th style={{borderBottom: '1px solid black'}}>Contact</th>
					<th style={{borderBottom: '1px solid black'}}>Country</th>
				</tr>
				<tr style={{borderBottom: '1px solid black'}}>
					<td>Alfreds Futterkiste</td>
					<td>Maria Anders</td>
					<td>Germany</td>
				</tr>
				<tr style={{borderBottom: '1px solid black'}}>
					<td>Centro comercial Moctezuma</td>
					<td>Francisco Chang</td>
					<td>Mexico</td>
				</tr>
				</table>
				</div>
				<div>
				<table style={{ tableLayout: 'fixed',
				width: '100%',
				borderCollapse: 'collapse',
				border: '3px solid purple',marginBottom:'30px',width:'400px' ,float:'rirght', marginLeft:'100px'}}>
				<tr>
					<th style={{borderBottom: '1px solid black'}}>Company</th>
					<th style={{borderBottom: '1px solid black'}}>Contact</th>
					<th style={{borderBottom: '1px solid black'}}>Country</th>
				</tr>
				<tr style={{borderBottom: '1px solid black'}}>
					<td>Alfreds Futterkiste</td>
					<td>Maria Anders</td>
					<td>Germany</td>
				</tr>
				<tr style={{borderBottom: '1px solid black'}}>
					<td>Centro comercial Moctezuma</td>
					<td>Francisco Chang</td>
					<td>Mexico</td>
				</tr>
				</table>
				</div>
			  </div>
			  
		</div>

	</div>
	);
};

export default Admin;