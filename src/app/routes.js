import React from 'react';
import { Route, Switch }  from 'react-router-dom';
import NotFound from "./Components/views/notfound"
import form from './Components/Forms';

/**
 * Defines components to routes mapping.
 *
 * Everytime a new view is created, entry is required here to map the component to a specific route.
 *
 * [IMPORTANT]
 * All route entries are required to be done before the notFound component.
 *
 * @returns {XML}
 */
export default () => {
	return (
		<Switch>
			<Route exact path="/" component={form} />
			<Route path="*" component={NotFound} />
		</Switch>
	);
}