import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { increment, decrement, fetchUsersStart } from '../../store/actions';

const Dashboard = props => {
  return (
    <div>
      count {props.count}
      <button onClick={props.increment}>Increment</button>
      <button onClick={props.decrement}>Decrement</button>
      <button onClick={() => props.fetchUsersStart({ results: 10 })}>Fetch</button>
    </div>
  );
};

export default connect(
  state => ({
    count: state.counter.count,
    usersList: state.users.usersList,
  }),
  {
    increment,
    decrement,
    fetchUsersStart,
  }
)(Dashboard);
