import React from 'react';
import { Dashboard } from 'routes/Dashboard';
import { ExplorePlanets } from 'routes/ExplorePlanets';
import { Login } from 'routes/Login';
import { Mars } from 'routes/Mars';
import { NotFound } from 'routes/NotFound';
import { SpaceStation } from 'routes/SpaceStation';

enum KEYS {
  DASHBOARD = 'DASHBOARD',
  LOGIN = 'LOGIN',
  NOT_FOUND = 'NOT_FOUND',
  SPACE_STATION = 'SPACE_STATION',
  MARS = 'MARS',
  EXPLORE_PLANETS = 'EXPLORE_PLANETS',
}

type ROUTES_TYPE = {
  [key in keyof typeof KEYS]: {
    component: React.FC<any>;
    path: string;
  };
};

export const ROUTES: ROUTES_TYPE = {
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
};
