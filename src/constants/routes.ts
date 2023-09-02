import React from 'react';

import { Mars } from 'routes/Mars';
import { NotFound } from 'routes/NotFound';
import { Dashboard } from 'routes/Dashboard';
import { SpaceStation } from 'routes/SpaceStation';
import { ExplorePlanets } from 'routes/ExplorePlanets';

export const ROUTES = {
  DASHBOARD: {
    component: Dashboard,
    path: '/',
  },
  SPACE_STATION: {
    component: SpaceStation,
    path: '/iss',
  },
  MARS: {
    component: Mars,
    path: '/mars',
  },
  EXPLORE_PLANETS: {
    component: ExplorePlanets,
    path: '/explore-planets',
  },
  NOT_FOUND: {
    component: NotFound,
    path: '/*',
  },
} as const;

type MutableRoutes = {
  -readonly [key in keyof typeof ROUTES]: typeof ROUTES[key]['path'];
};

export const ROUTE_PATHS = Object.entries(ROUTES).reduce(
  (acc, [key, value]) => {
    (acc as any)[key] = value.path;

    return acc;
  },
  {} as MutableRoutes,
);
