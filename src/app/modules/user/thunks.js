import { fetchUsers } from './api';
import { fetchUsersSuccess, fetchUsersFailure } from './actions';

export const loadUsers = () => dispatch =>
	fetchUsers().then(
		users => {
			dispatch(fetchUsersSuccess(Array.isArray(users) ? users : [users]));
		},
		error => {
			dispatch(fetchUsersFailure(error));
		}
	);
