import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import Autocomplete from './Autocomplete';

function Planning() {
	return (
		<Container className='travel-form'>
			<Form className='form-inline'>
				<Form.Group className='form-group mb-2 '>
					<Form.Label className='form-item'>Starting From</Form.Label>
					{/* <Form.Control type='text' placeholder='Starting from' /> */}
					<Autocomplete />
				</Form.Group>

				<Form.Group className='form-group mx-sm-3 mb-2 form-item'>
					<Form.Label className='form-item'>Destination</Form.Label>
					<Form.Control type='text' name='name' placeholder='Destination' />
				</Form.Group>

				<Button type='submit' bsPrefix='btn-item' className='btn-md col-lg-2 '>
					<i className='fas fa-sign-in-alt'></i> Start Planning
				</Button>
			</Form>
		</Container>
	);
}

export default Planning;
