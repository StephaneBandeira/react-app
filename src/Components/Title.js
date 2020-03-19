import React from 'react';
import { Container, Col, Row, Figure } from 'react-bootstrap';
import titleImage from '../images/romantic-beach.jpg';

function Title() {
	return (
		<Container className='title-section'>
			<Row>
				<Col className='title'>
					<h1>Plan your next road trip!</h1>
					<p>Build your itinerary and then use it to lead the way.</p>
					<Container className='img-plan'>
						<p>
							<i className='fas fa-globe-americas'></i> Plan your next trip
						</p>
					</Container>
				</Col>
				<Col>
					<Figure>
						<Figure.Image alt='romantic beach' src={titleImage} className='title-img' />
					</Figure>
				</Col>
			</Row>
		</Container>
	);
}

export default Title;
