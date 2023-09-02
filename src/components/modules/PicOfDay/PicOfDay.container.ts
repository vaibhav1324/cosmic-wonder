import React from 'react';

import { getPicOfTheDay } from 'api/apod';
import { useQuery } from 'react-query';

import { PicOfDayProps } from './PicOfDay.props';
import View from './PicOfDay.view';

const Container: React.FC<PicOfDayProps> = () => {
  const { data, isLoading } = useQuery('get-pic-of-the-day', getPicOfTheDay);

  return View({ data, isLoading });
};

export default Container;
