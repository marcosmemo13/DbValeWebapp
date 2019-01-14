import React from 'react';
import { Provider } from "react-redux";
import { BrowserRouter as Router } from 'react-router-dom';
import store from "./store";
import '../theme.css';
import Routes from './routes';


/**
 * Application entry point.
 * Maps provider, store, routes
 *
 * We are using browser router, if hashRouting is preferred then this is where you change.
 */
const App = () => (
	<Provider store={store}>
		<Router>
			<Routes />
		</Router>
	</Provider>
)

export default App;