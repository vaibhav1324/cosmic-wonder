import React from 'react';

import { getMarsWeather } from 'api/mars';
import { useQuery } from 'react-query';

import { MarsWeatherProps } from './MarsWeather.props';
import View from './MarsWeather.view';

const Container: React.FC<MarsWeatherProps> = (props) => {
  const { data, isLoading } = useQuery('fetch-mars-weather', getMarsWeather);

  return View({ data, isLoading });
};

export default Container;
