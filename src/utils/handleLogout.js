import { localStorage } from './index';
import { RedirectRouter } from '../routes';

const handleLogout = () => {
  localStorage.clearStorage();
  RedirectRouter.goToSignInPage();
};

export default handleLogout;
