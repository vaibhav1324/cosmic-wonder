import React from 'react';
import { getPicOfTheDay } from 'api/apod';
import { useQuery } from 'react-query';
import { DashboardProps } from './Dashboard.props';
import View from './Dashboard.view';

const Container = (props: DashboardProps) => {
  const { data, isLoading } = useQuery('get-pic-of-the-day', getPicOfTheDay);
  console.log(data, isLoading);

  return View({});
};

export default Container;
