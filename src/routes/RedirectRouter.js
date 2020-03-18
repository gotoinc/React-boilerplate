import { createBrowserHistory } from 'history';

class RedirectRouter {
  constructor() {
    this.history = createBrowserHistory();
  }
}

export default new RedirectRouter();
