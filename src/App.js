import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Views/Home';
import Account from './Views/Account';
import Destination from './Views/Destination';
import PageNotFound from './Views/PageNotFound';
import NavigationBar from './Components/NavigationBar';

let userIsRegistered = true;

function App() {
	return (
		<div>
			<NavigationBar />
			<Router>
				<Switch>
					<Route exact path='/' component={Home} />
					<Route path='/destination' component={Destination} />
					<Route path='/Account' component={Account} />
					<Route component={PageNotFound} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
