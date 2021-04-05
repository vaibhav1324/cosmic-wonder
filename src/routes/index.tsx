import React from 'react';
import { Switch, useLocation } from 'react-router';
import { ROUTES } from 'constants/routes';
import RouteWithSubRoutes from 'components/core/RouteWithSubRoutes';
import AuthGuard from 'components/core/AuthGuard';
import { AnimatePresence } from 'framer-motion';

const Routes = (): JSX.Element => {
  const location = useLocation();

  return (
    <AuthGuard>
      <AnimatePresence exitBeforeEnter initial={true}>
        <Switch location={location} key={location.key}>
          {Object.values(ROUTES).map((route) => (
            <RouteWithSubRoutes key={route.path} {...route} exact />
          ))}
        </Switch>
      </AnimatePresence>
    </AuthGuard>
  );
};

export default Routes;
