import React, { FC } from 'react';

import { AnimatePresence } from 'framer-motion';
import { Switch } from 'react-router';

import RouteWithSubRoutes from 'components/core/RouteWithSubRoutes';

import { ROUTES } from 'constants/routes';

const Routes: FC = () => {
  return (
    <AnimatePresence exitBeforeEnter initial={true}>
      <Switch>
        {Object.values(ROUTES).map((route) => (
          <RouteWithSubRoutes key={route.path} {...route} exact />
        ))}
      </Switch>
    </AnimatePresence>
  );
};

export default Routes;
