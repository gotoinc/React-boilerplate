import { actionCreator } from '../../utils';
import * as localeConstants from '../constants/localeConstants';

const action = actionCreator(localeConstants.actionsName);

export const changeLocale = action(localeConstants.changeLocale);
