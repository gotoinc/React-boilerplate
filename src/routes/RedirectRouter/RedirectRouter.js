import { createBrowserHistory } from 'history';
import { browserLocale, localStorage } from '../../utils';
import { availableLocalizations, defaultLocale } from '../../utils/constants';

class RedirectRouter {
  constructor() {
    this.history = createBrowserHistory();
  }

  getLocale = () => {
    const pathnamesList = this.history.location.pathname.split('/');
    const currentLocale = availableLocalizations.filter(locale => pathnamesList.includes(locale));
    if (currentLocale.length) {
      return '';
    }
    const localStorageLocale = localStorage.getItem('locale');
    const isUserLocaleCorrect = availableLocalizations.includes(localStorageLocale);

    if (isUserLocaleCorrect) {
      return localStorageLocale;
    }
    if (browserLocale) {
      return browserLocale;
    }
    return defaultLocale;
  };

  goToSignInPage = () => {
    this.history.push(`${this.getLocale()}sign-in`);
  };

  getLoginPath() {
    return `${this.getLocale()}/sign-in`;
  }

  goToDashboard = () => {
    this.history.push(`${this.getLocale()}dashboard`);
  };

  getDashboardPath() {
    return `${this.getLocale()}/dashboard`;
  }

  goToProfile = () => {
    this.history.push(`${this.getLocale()}profile`);
  };

  getPage404Path = locale => {
    if (availableLocalizations.includes(locale)) {
      return `/${locale}/404`;
    }
    const localStorageLocale = localStorage.getItem('locale');
    const isUserLocaleCorrect = availableLocalizations.includes(localStorageLocale);

    if (isUserLocaleCorrect) {
      return `/${localStorageLocale}/404`;
    }
    if (browserLocale) {
      return `/${browserLocale}/404`;
    }
    return `/${defaultLocale}/404`;
  };

  getCurrentPath = () => {
    return this.history.location.pathname;
  };

  logOut = () => {
    localStorage.clearStorage();
    this.goToSignInPage();
  };
}

export default new RedirectRouter();
