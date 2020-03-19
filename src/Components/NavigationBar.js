import React from 'react';
import { Navbar, Nav, Figure } from 'react-bootstrap';
import brandImage from '../images/brand2.png';

function NavigationBar() {
	return (
		<Navbar expand='sm' className='navbar-expand-sm'>
			<Navbar.Brand href='/'>
				<Figure.Image alt='brand' src={brandImage} className='brandImg' />
			</Navbar.Brand>

			<Navbar.Collapse className='justify-content-end' id='basic-navbar-nav'>
				<Navbar.Toggle aria-controls='basic-navbar-nav' />
				<Nav className='ml-auto'>
					<Nav.Link bsPrefix='navb-item' href='/'>
						Home
					</Nav.Link>
					<Nav.Link bsPrefix='navb-item' href='/destination'>
						Destination
					</Nav.Link>
					<Nav.Link bsPrefix='navb-item' href='/account'>
						Account
					</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
}

export default NavigationBar;
