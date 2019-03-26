import delay from './delay';
import { users } from './stub/users';

// #region User
export const fetchUsers = () =>
	new Promise(resolve =>
		setTimeout(() => {
			resolve(users);
		}, delay)
	);
// #endregion
