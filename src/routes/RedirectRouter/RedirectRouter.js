import { createBrowserHistory } from 'history';
import RoutesList from '../RoutesList';

class RedirectRouter {
  constructor() {
    this.history = createBrowserHistory();
  }

  goToSplash = () => {
    this.history.push(RoutesList.splash);
  };

  goToLogin() {
    this.history.push(RoutesList.login);
  }

  goToMain() {
    this.history.push(RoutesList.main);
  }

  goToPage404() {
    this.history.push(RoutesList.page404);
  }

  gotToSomeRouteWithParams({ campaignId, assessmentId }) {
    this.history.push(`/main/campaign/${campaignId}/assessment/${assessmentId}`);
  }

  getCurrentPath = () => {
    return this.history.location.pathname;
  };
}

export default new RedirectRouter();
