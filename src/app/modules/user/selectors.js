import * as fromUser from './reducer';

export const getUsers = state => fromUser.getUsers(state.users);
