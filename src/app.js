import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Dashboard } from './pages';

function App() {
  return (
    <div id="body">
      <Switch>
        <Route
          path="/ru"
          exact
          render={props => {
            return <Dashboard />;
          }}
        />
      </Switch>
    </div>
  );
}

export default App;
