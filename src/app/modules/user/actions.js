// @flow

import * as types from './actionTypes';
import type { User } from 'models/user';

// #region ActionDefinitions
type FetchUsersRequestedAction = {
	type: string,
	isFetching: boolean
};
type FetchUsersSuccessAction = {
	type: string,
	users: User[],
	isFetching: boolean
};
type FetchUsersFailureAction = {
	type: string,
	users: User[],
	isFetching: boolean
};
// #endregion

// #region ActionCreators
export const fetchUsersRequested = (): FetchUsersRequestedAction => ({
	type: types.FETCH_USERS.REQUESTED,
	isFetching: true
});
export const fetchUsersSuccess = (users: User[]): FetchUsersSuccessAction => ({
	type: types.FETCH_USERS.SUCCESS,
	users,
	isFetching: false
});
export const fetchUsersFailure = (users: User[]): FetchUsersFailureAction => ({
	type: types.FETCH_USERS.FAILURE,
	users,
	isFetching: false
});
// #endregion
