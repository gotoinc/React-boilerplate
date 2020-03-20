import { availableLocalizations } from './constants';

const createLocalizationSchema = () => `/:locale(${availableLocalizations.join('|')})`;

export default createLocalizationSchema;
