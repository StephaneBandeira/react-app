import React from 'react';
import Title from '../Components/Title';
import Planning from '../Components/Planning';
// import Map from '../Components/Map';

function Home() {
	return (
		<div>
			<Title />
			<Planning />
			<div>
				{/* <Map
					googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&key=${process.env.REACT_APP_GOOGLE_KEY}&libraries=places`}
					loadingElement={<p>Loading</p>}
					containerElement={<div className='map-container' style={{ height: `400px` }} />}
					mapElement={
						<div className='map-item' style={{ height: `100%`, width: `70%` }} />
					}
				/> */}
			</div>
		</div>
	);
}

export default Home;
