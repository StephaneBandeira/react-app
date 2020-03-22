import React, { useState } from 'react';
import { Container, Form } from 'react-bootstrap';
import { Marker } from 'react-google-maps';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import Map from '../Maps/Map';

function Autocomplete() {
	const [Adress, setAddress] = useState('');
	const [coordinates, setCoordinates] = useState({ lat: null, lng: null });

	async function handleSelect(value) {
		const results = await geocodeByAddress(value);
		const latLng = await getLatLng(results[0]);
		setAddress(value);
		setCoordinates(latLng);
		console.log(value);
	}

	return (
		<Container className='travel-form'>
			<PlacesAutocomplete
				value={Adress}
				onChange={setAddress}
				onSelect={handleSelect}
				className='form-inline'>
				{({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
					<div>
						<div className='autocomplete'>
							<Form.Label className='form-item'>Starting From</Form.Label>
							<input
								{...getInputProps({ placeholder: 'Starting from' })}
								type='text'
							/>
							<div>
								{loading ? <div>...loading</div> : null}

								{suggestions.map(suggestion => {
									const style = {
										backgroundColor: suggestion.active ? '#659960' : '#fff',
									};
									return (
										<div {...getSuggestionItemProps(suggestion, { style })}>
											{suggestion.description}
										</div>
									);
								})}
							</div>
							<div>
								<p>Latitude: {coordinates.lat}</p>
								<p>Longitude: {coordinates.lng}</p>
							</div>

							<div>
								<Map
									googleMapURL={`https://maps.googleapis.com/maps/api/js?key=REACT_APP_GOOGLE_KEY&libraries=places`}
									loadingElement={<p>Loading</p>}
									containerElement={
										<div
											className='map-container'
											style={{ height: `400px` }}
										/>
									}
									mapElement={
										<div
											className='map-item'
											style={{ height: `100%`, width: `70%` }}
										/>
									}></Map>

								{/* <InfoWindow
									position={{
										lat: -22.9,
										lng: -43.1,
									}}>
									<div>
										<span style={{ padding: 0, margin: 0 }}>{coordinates}</span>
									</div>
								</InfoWindow> */}
							</div>
						</div>
					</div>
				)}
			</PlacesAutocomplete>
		</Container>
	);
}

export default Autocomplete;
