import { actionCreator } from '../../utils';
import * as usersConstants from '../constants/usersConstants';

const action = actionCreator(usersConstants.actionsName);

export const fetchUsersActions = action(usersConstants.fetchUsers);
