import * as types from './actionTypes';
import { combineReducers } from 'redux';

const byId = (state = {}, action) => {
	switch (action.type) {
		case types.FETCH_USERS.SUCCESS: {
			const nextState = { ...state };
			action.users.map(user => {
				nextState[user.id] = user;
			});
			return nextState;
		}
		default:
			return state;
	}
};
const allIds = (state = [], action) => {
	switch (action.type) {
		case types.FETCH_USERS.SUCCESS:
			return action.users.map(user => user.id);
		default:
			return state;
	}
};

export default combineReducers({
	byId,
	allIds
});

export const getUsers = state => state.allIds.map(id => state.byId[id]);
