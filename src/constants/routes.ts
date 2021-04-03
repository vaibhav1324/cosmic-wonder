import { Dashboard } from 'routes/Dashboard';
import { NotFound } from 'routes/NotFound';

export const ROUTES = {
  DASHBOARD: {
    component: Dashboard,
    path: '/',
  },
  NOT_FOUND: {
    component: NotFound,
    path: '/404',
  },
};
