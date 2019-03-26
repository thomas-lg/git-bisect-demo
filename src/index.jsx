/* eslint-disable no-unused-vars */
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from './app/modules/store';
import Root from './app/Root';

const store = configureStore();

render(
	<Provider store={store}>
		<Root />
	</Provider>,
	document.getElementById('root')
);
