import React from 'react';
import { GoogleMap, withGoogleMap, Marker } from 'react-google-maps';

const Map = props => {
	return (
		<GoogleMap defaultZoom={6} defaultCenter={{ lat: -22.9068, lng: -43.1729 }}>
			<Marker position={{ lat: -22.9068, lng: -43.1729 }} />
		</GoogleMap>
	);
};

export default withGoogleMap(Map);

// {coordinates ?  <Marker position={{ lat: -22.9068, lng: -43.1729 }} />}
