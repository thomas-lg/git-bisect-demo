import React from 'react';
import { hot } from 'react-hot-loader';
import { App } from './App';
import { BrowserRouter as Router } from 'react-router-dom';

const Root = () => {
	return (
		<Router>
			<App />
		</Router>
	);
};
export default hot(module)(Root);
