import api from './api';

class UsersApi {
  getUsers = payload => {
    return api.get({
      customConfig: {
        params: {
          ...payload,
        },
      },
    });
  };
}

const usersApi = new UsersApi();

export default usersApi;
