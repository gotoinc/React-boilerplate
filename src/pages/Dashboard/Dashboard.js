import React, { useMemo } from 'react';
import { useUsers } from '../../hooks';

const Dashboard = () => {
  const params = useMemo(() => ({ results: 10 }), []);
  const users = useUsers(params);
  return (
    <div>
      Dashboard
      {users.map(user => (
        <div key={user.login.uuid}>{user.email}</div>
      ))}
    </div>
  );
};

export default Dashboard;
