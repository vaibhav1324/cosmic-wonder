import { Dashboard } from 'routes/Dashboard';
import { Login } from 'routes/Login';
import { NotFound } from 'routes/NotFound';

export const ROUTES = {
  DASHBOARD: {
    component: Dashboard,
    path: '/',
  },
  LOGIN: {
    component: Login,
    path: '/login',
  },
  NOT_FOUND: {
    component: NotFound,
    path: '/404',
  },
};
