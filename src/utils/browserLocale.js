import { availableLocalizations } from './constants';

const browserLocale = (navigator.languages && navigator.languages[0]) || navigator.language;
const browserLocaleWithoutRegionCode = browserLocale.toLowerCase().split(/[_-]+/)[0];
const currentLocale = availableLocalizations.includes(browserLocaleWithoutRegionCode)
  ? browserLocaleWithoutRegionCode
  : 'en';
export default currentLocale;
