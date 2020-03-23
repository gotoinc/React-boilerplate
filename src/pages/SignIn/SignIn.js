import React from 'react';
import { localStorage } from '../../utils';
import { RedirectRouter } from '../../routes';

const SignIn = () => {
  return (
    <div>
      <button
        type="button"
        onClick={() => {
          localStorage.setItem('authToken', 'token');
          localStorage.setItem('role', 'member');
          RedirectRouter.goToDashboard();
        }}
      >
        SignIn
      </button>
    </div>
  );
};

export default SignIn;
