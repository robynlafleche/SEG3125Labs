import React, {Component} from "react";
import {Navbar, Nav, Container} from 'react-bootstrap'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Booking from "../../pages/booking";
import FAQ from "../../pages/faq";
import Home from "../../pages/home";
import Rooms from "../../pages/rooms";
import Contact from "../../pages/contact";
import Admin from "../../pages/admin";
import Cart from "../../pages/cart";




class Index extends Component {
	render() {
				
		return (
			<Router>
				<div>
					<Navbar bg="light" expand="lg">
						<Container>
							<Navbar.Brand href="/home">
								<img
								alt=""
								src={require('./logo.png')}
								width="75"
								height="75"
								transform= "scale(1.5)"
								className="d-inline-block align-top"
								/>
							</Navbar.Brand>
							<Navbar.Toggle aria-controls="basic-navbar-nav" />
							<Navbar.Collapse id="basic-navbar-nav">
							<Nav className="navbar-nav nav-fill w-100">
								<Nav.Link as={Link} to={'/home'} >Home</Nav.Link>
								<Nav.Link as={Link} to={'/booking'} >Booking</Nav.Link>
								<Nav.Link as={Link} to={'/faq'} >FAQ</Nav.Link>
								<Nav.Link as={Link} to={'/rooms'} >Rooms</Nav.Link>
								<Nav.Link as={Link} to={'/contact'} >Contact</Nav.Link>
								<Nav.Link as={Link} to={'/admin'} >Admin</Nav.Link>
								<Nav.Link as={Link} to={'/cart'} >Cart</Nav.Link>
							</Nav>
							</Navbar.Collapse>
							
						</Container>
					</Navbar>
				</div>
				<div>
					<Routes>
					<Route path='/' element={<Home/>} />
					<Route path='/home' element={<Home/>} />
					<Route path='/booking' element={<Booking/>} />
					<Route path='/faq' element={<FAQ/>} />
					<Route path='/rooms' element={<Rooms/>} />
					<Route path='/admin' element={<Admin/>} />
					<Route path='/contact' element={<Contact/>} />
					<Route path='/cart' element={<Cart/>} />
					</Routes>
				</div>
			</Router>
					)
	}
}
export default Index;