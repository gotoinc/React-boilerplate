import { browserLocale } from '../../utils';

const RoutesList = {
  splash: `/:locale(en|ru)/`,
  dashboard: `/:locale(en|ru)/dashboard`,
  signIn: `/:locale(en|ru)/sign-in`,
  page404: `/${browserLocale}/404`,
  admin: `/${browserLocale}/admin`,
  // someRouteWithParams = '/main/campaign/:campaignId/assessment/:assessmentId',
};
export default RoutesList;
