import React from 'react';
import { Form, Button, Container, Figure } from 'react-bootstrap';
import { Formik } from 'formik';
import * as Yup from 'yup';
import userImage from '../images/avatar-1.png';

function Account() {
	let userIsRegistered = false;

	function handleSubmit(values, { setSubmitting }) {
		console.log('Submiting');
		console.log(values);
	}

	return (
		<Formik
			initialValues={{ name: '', email: '', password: '', password2: '' }}
			onSubmit={handleSubmit}
			validationSchema={Yup.object().shape({
				name: Yup.string()
					.email()
					.required('* Required'),
				email: Yup.string()
					.email()
					.required('* Required'),
				password: Yup.string()
					.required('* No password provided.')
					.min(8, '* Password must have at least 8 characters.')
					.matches(/(?=.*[0-9])/, '* Password must contain a number.'),
			})}>
			{props => {
				const { values, touched, errors, handleChange, handleBlur, handleSubmit } = props;

				return (
					<div className='modal-dialog'>
						<div className='col-sm-8 main-section'>
							<div className='login-item modal-content'>
								<Figure className='col-12 user-image'>
									<Figure.Image alt='user' src={userImage} id='img' />
								</Figure>
								<Form onSubmit={handleSubmit} className='col-12'>
									<Form.Group>
										<Form.Label className='label-item'>Name</Form.Label>
										<Form.Control
											value={values.name}
											onChange={handleChange}
											type='text'
											placeholder='Name'
											name='name'
											onBlur={handleBlur}
											className={errors.name && touched.name && 'error'}
										/>
										{errors.name && touched.name && (
											<div className='error'>{errors.name}</div>
										)}
									</Form.Group>
									<Form.Group>
										<Form.Label className='label-item'>
											Email address
										</Form.Label>
										<Form.Control
											onChange={handleChange}
											name='email'
											value={values.email}
											placeholder='Email'
											onBlur={handleBlur}
											className={
												errors.email &&
												touched.email &&
												'control-group error'
											}
										/>
										{errors.email && touched.email && (
											<div className='error'>{errors.email}</div>
										)}
									</Form.Group>
									<Form.Group>
										<Form.Label className='label-item'>Password</Form.Label>
										<Form.Control
											value={values.password}
											type='password'
											placeholder='Password'
											name='password'
											onChange={handleChange}
											onBlur={handleBlur}
											className={
												errors.password && touched.password && 'error'
											}
										/>
										{errors.password && touched.password && (
											<div className='error'>{errors.password}</div>
										)}
									</Form.Group>
									{!userIsRegistered && (
										<Form.Group>
											<Form.Control
												value={values.password}
												type='password'
												placeholder='Confirm Pasword'
												name='password'
												onChange={handleChange}
												onBlur={handleBlur}
											/>
											{errors.password && touched.password && (
												<div className='error'>{errors.password}</div>
											)}
										</Form.Group>
									)}
									<Container>
										<Button
											type='submit'
											bsPrefix='btn-item-login'
											className='btn-md'>
											<i className='fas fa-sign-in-alt' />
											{userIsRegistered ? 'Login' : 'Register'}
										</Button>
									</Container>
								</Form>
							</div>
						</div>
					</div>
				);
			}}
		</Formik>
	);
}

export default Account;
