import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '.';
import thunk from 'redux-thunk';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';

/* eslint-disable no-undef */
export const configureStore = initialStore => {
	const middlewares = [thunk];
	if (!PRODUCTION) {
		const { createLogger } = require(`redux-logger`);
		middlewares.push(createLogger({}));
		middlewares.push(reduxImmutableStateInvariant());
	}
	const composeEnhancers =
		window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
	return createStore(
		rootReducer,
		initialStore,
		composeEnhancers(applyMiddleware(...middlewares))
	);
};
