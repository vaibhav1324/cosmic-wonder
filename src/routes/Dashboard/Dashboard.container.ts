import React from 'react';
import { getPicOfTheDay } from 'api/apod';
import { useQuery } from 'react-query';
import { DashboardProps } from './Dashboard.props';
import View from './Dashboard.view';

const Container: React.FC<DashboardProps> = (props) => {
  const { data, isLoading } = useQuery('get-pic-of-the-day', getPicOfTheDay);

  return View({});
};

export default Container;
