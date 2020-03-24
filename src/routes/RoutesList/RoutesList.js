import { createLocalizationSchema } from '../../utils';

const routes = {
  splash: '/',
  dashboard: '/dashboard',
  signIn: '/sign-in',
  signUp: '/sign-up',
  page404: '/404',
  profile: '/profile',
};

const RoutesList = {
  splash: `${createLocalizationSchema()}${routes.splash}`,
  dashboard: `${createLocalizationSchema()}${routes.dashboard}`,
  signIn: `${createLocalizationSchema()}${routes.signIn}`,
  signUp: `${createLocalizationSchema()}${routes.signUp}`,
  page404: `${createLocalizationSchema()}${routes.page404}`,
  profile: `${createLocalizationSchema()}${routes.profile}`,
  // someRouteWithParams = '/main/campaign/:campaignId/assessment/:assessmentId',
};
export default RoutesList;
