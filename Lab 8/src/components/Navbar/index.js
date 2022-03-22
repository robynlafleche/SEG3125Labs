import React from 'react';

import {
	Nav,
	NavLink,
	Bars,
	NavMenu,
	NavBtn,
	NavBtnLink,
} from './NavbarElements';

const Navbar = () => {
	return (
		<>
			<Nav>
				<Bars/>

				<NavMenu>
					<NavLink to='/home' activeStyle>
						Home
					</NavLink>
					<NavLink to='/booking' activeStyle>
						Booking
					</NavLink>
					<NavLink to='/faq' activeStyle>
						FAQ
					</NavLink>
					<NavLink to='/rooms' activeStyle>
						Rooms
					</NavLink>
					<NavLink to='/team-building' activeStyle>
						Team Building
					</NavLink>
					<NavLink to='/contact' activeStyle>
						Contact
					</NavLink>
					<NavLink to='/admin' activeStyle>
						Admin
					</NavLink>
				</NavMenu>
			</Nav>
		</>
	);
};

export default Navbar;
