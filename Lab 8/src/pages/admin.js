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
				{/* style for input fields inspired from https://www.w3schools.com/css/css_form.asp */}
					<div>
    					<label>Username</label>
    					<input style={{ width: '100%',padding: '12px 20px',margin: '8px 0',boxSizing: 'border-box'}} value={username} onInput={e => setusername(e.target.value)}/>
						<label>Password</label>
    					<input style={{ width: '100%',padding: '12px 20px',margin: '8px 0',boxSizing: 'border-box'}} value={password} onInput={e => setpassword(e.target.value)}/>
    				</div>  
				<button style={{ width: '30%',float:'center',padding: '12px 20px',margin: '8px 0',boxSizing: 'border-box'}} type="submit">Login</button>
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
			
					<hr style={{width:'0%', float:'center'}}></hr>
					<hr></hr>
					<h3>Detailed statistics about each room</h3>

					
			  <div>
				{/* <h4>The stats for Rooms</h4> */}
				{/* table style from https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Styling_tables */}
				<div>
		
				<table style={{ tableLayout: 'fixed',
					
					borderCollapse: 'collapse',
					border: '3px solid #FFDA79',marginBottom:'30px',width:'400px' ,float:'left', marginRight:'50px'}}>
					<tr>
						<th style={{borderBottom: '1px solid black'}}>Room 1: Space Adventure</th>
						<th style={{borderBottom: '1px solid black'}}>(60 mins)</th>
						
					</tr>
					<tr>
						<th style={{borderBottom: '1px solid black'}}>teams played</th>
						<td style={{borderBottom: '1px solid black'}}>12</td>
						
					</tr>
					<tr>
						<th style={{borderBottom: '1px solid black'}}>succesful escapes</th>
						<td style={{borderBottom: '1px solid black'}}>3</td>
						
					</tr>
					<tr>
						<th style={{borderBottom: '1px solid black'}}>Escape rates</th>
						<td style={{borderBottom: '1px solid black'}}>25%</td>
						
					</tr>
					<tr>
						<th style={{borderBottom: '1px solid black'}}>Fastest Escape time</th>
						<td style={{borderBottom: '1px solid black'}}>43:58 mins</td>
						
					</tr>
					<tr>
						<th style={{borderBottom: '1px solid black'}}>Total sales</th>
						<td style={{borderBottom: '1px solid black'}}>$860</td>
						
					</tr>
					</table>
					</div>
				<div>
				<table style={{ tableLayout: 'fixed',
					
					borderCollapse: 'collapse',
					border: '3px solid #FFDA79',marginBottom:'30px',width:'400px' ,float:'right', marginRight:'20px'}}>
					<tr>
						<th style={{borderBottom: '1px solid black'}}>Room 2: Jungle Escape</th>
						<th style={{borderBottom: '1px solid black'}}>(45 min)</th>
						
					</tr>
					<tr>
						<th style={{borderBottom: '1px solid black'}}>teams played:</th>
						<td style={{borderBottom: '1px solid black'}}>20</td>
						
					</tr>
					<tr>
						<th style={{borderBottom: '1px solid black'}}>succesful escapes</th>
						<td style={{borderBottom: '1px solid black'}}>10</td>
						
					</tr>
					<tr>
						<th style={{borderBottom: '1px solid black'}}>Escape rates</th>
						<td style={{borderBottom: '1px solid black'}}>50%</td>
						
					</tr>
					<tr>
						<th style={{borderBottom: '1px solid black'}}>Fastest Escape time</th>
						<td style={{borderBottom: '1px solid black'}}>25 mins</td>
						
					</tr>
					<tr>
						<th style={{borderBottom: '1px solid black'}}>Total sales</th>
						<td style={{borderBottom: '1px solid black'}}>$1260</td>
						
					</tr>
					</table>
				</div>
				
			</div>	 

			<div>
				
				{/* table style from https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Styling_tables */}
				<div>
			
				<table style={{ tableLayout: 'fixed',
					
					borderCollapse: 'collapse',
					border: '3px solid #FFDA79',marginBottom:'30px',width:'400px' ,float:'left', marginRight:'200px'}}>
					<tr>
						<th style={{borderBottom: '1px solid black'}}>Room 3: Hunted House</th>
						<th style={{borderBottom: '1px solid black'}}>(40 mins)</th>
						
					</tr>
					<tr>
						<th style={{borderBottom: '1px solid black'}}>teams played:</th>
						<td style={{borderBottom: '1px solid black'}}>30</td>
						
					</tr>
					<tr>
						<th style={{borderBottom: '1px solid black'}}>succesful escapes</th>
						<td style={{borderBottom: '1px solid black'}}>20</td>
						
					</tr>
					<tr>
						<th style={{borderBottom: '1px solid black'}}>Escape rates</th>
						<td style={{borderBottom: '1px solid black'}}>66%</td>
						
					</tr>
					<tr>
						<th style={{borderBottom: '1px solid black'}}>Fastest Escape time</th>
						<td style={{borderBottom: '1px solid black'}}>10 mins</td>
						
					</tr>
					<tr>
						<th style={{borderBottom: '1px solid black'}}>Total sales</th>
						<td style={{borderBottom: '1px solid black'}}>$700</td>
						
					</tr>
					</table>
					</div>
				<div>
				<table style={{ tableLayout: 'fixed',
					
					borderCollapse: 'collapse',
					border: '3px solid #FFDA79',marginBottom:'30px',width:'400px' ,float:'right', marginRight:'20px'}}>
					<tr>
						<th style={{borderBottom: '1px solid black'}}>Room 4: Sea Adventure</th>
						<th style={{borderBottom: '1px solid black'}}>(30 mins)</th>
						
					</tr>
					<tr>
						<th style={{borderBottom: '1px solid black'}}>teams played:</th>
						<td style={{borderBottom: '1px solid black'}}>90</td>
						
					</tr>
					<tr>
						<th style={{borderBottom: '1px solid black'}}>succesful escapes</th>
						<td style={{borderBottom: '1px solid black'}}>40</td>
						
					</tr>
					<tr>
						<th style={{borderBottom: '1px solid black'}}>Escape rates</th>
						<td style={{borderBottom: '1px solid black'}}>44%</td>
						
					</tr>
					<tr>
						<th style={{borderBottom: '1px solid black'}}>Fastest Escape time</th>
						<td style={{borderBottom: '1px solid black'}}>15 mins</td>
						
					</tr>
					<tr>
						<th style={{borderBottom: '1px solid black'}}>Total sales</th>
						<td style={{borderBottom: '1px solid black'}}>$3000</td>
						
					</tr>
					</table>
				</div>
				
			</div>	 

			<div>
				
				{/* table style from https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Styling_tables */}
				<div>
			
				<table style={{ tableLayout: 'fixed',
					
					borderCollapse: 'collapse',
					border: '3px solid #FFDA79',marginBottom:'30px',width:'400px' ,float:'left', marginRight:'0px'}}>
					<tr>
						<th style={{borderBottom: '1px solid black'}}>Room 5: Mars</th>
						<th style={{borderBottom: '1px solid black'}}>(120 mins)</th>
						
					</tr>
					<tr>
						<th style={{borderBottom: '1px solid black'}}>teams played:</th>
						<td style={{borderBottom: '1px solid black'}}>180</td>
						
					</tr>
					<tr>
						<th style={{borderBottom: '1px solid black'}}>succesful escapes</th>
						<td style={{borderBottom: '1px solid black'}}>90</td>
						
					</tr>
					<tr>
						<th style={{borderBottom: '1px solid black'}}>Escape rates</th>
						<td style={{borderBottom: '1px solid black'}}>50%</td>
						
					</tr>
					<tr>
						<th style={{borderBottom: '1px solid black'}}>Fastest Escape time</th>
						<td style={{borderBottom: '1px solid black'}}>90 mins</td>
						
					</tr>
					<tr>
						<th style={{borderBottom: '1px solid black'}}>Total sales</th>
						<td style={{borderBottom: '1px solid black'}}>$1200</td>
						
					</tr>
					</table>
					</div>
				<div>
				<table style={{ tableLayout: 'fixed',
					
					borderCollapse: 'collapse',
					border: '3px solid #FFDA79',marginBottom:'30px',width:'400px' ,float:'right', marginRight:'20px'}}>
					<tr>
						<th style={{borderBottom: '1px solid black'}}>Room 6: Sky Escape</th>
						<th style={{borderBottom: '1px solid black'}}>(200 mins)</th>
						
					</tr>
					<tr>
						<th style={{borderBottom: '1px solid black'}}>teams played:</th>
						<td style={{borderBottom: '1px solid black'}}>66</td>
						
					</tr>
					<tr>
						<th style={{borderBottom: '1px solid black'}}>succesful escapes</th>
						<td style={{borderBottom: '1px solid black'}}>33</td>
						
					</tr>
					<tr>
						<th style={{borderBottom: '1px solid black'}}>Escape rates</th>
						<td style={{borderBottom: '1px solid black'}}>50%</td>
						
					</tr>
					<tr>
						<th style={{borderBottom: '1px solid black'}}>Fastest Escape time</th>
						<td style={{borderBottom: '1px solid black'}}>150 mins</td>
						
					</tr>
					<tr>
						<th style={{borderBottom: '1px solid black'}}>Total sales</th>
						<td style={{borderBottom: '1px solid black'}}>$800</td>
						
					</tr>
					</table>
				</div>
				
			</div>	 
					
					  <div class="chart-container" style={{ height:'30vh', width:'30vw', marginBottom:'300px',width:'400px' ,float:'left'}}>
			  <h4>Number of succesful attempts per room</h4>
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
      			</div>
				  <div class="chart-container" style={{height:'30vh', width:'30vw', marginBottom:'300px',width:'400px' ,float:'right'}}>
			  <h4>Sales in $ per room</h4>
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
      			</div>
					
				
			</div>
			
			  <div>
			 
			 
			  
		</div>

	</div>
	);
};

export default Admin;