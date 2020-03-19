import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { usersSelector } from '../store/selectors/usersSelectors';
import { fetchUsersActions } from '../store/actions/usersActions';

const useUsers = params => {
  const users = useSelector(usersSelector);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsersActions.start(params));
  }, [dispatch, params]);

  return users;
};

export default useUsers;
