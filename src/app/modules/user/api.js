import { fetchUsersPath } from './constants';

export const fetchUsers = () => fetch(fetchUsersPath).then(r => r.json());
