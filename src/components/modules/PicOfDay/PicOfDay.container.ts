import { getPicOfTheDay } from 'api/apod';
import React from 'react';
import { useQuery } from 'react-query';
import { PicOfDayProps } from './PicOfDay.props';
import View from './PicOfDay.view';

const Container: React.FC<PicOfDayProps> = ({ containerRef }) => {
  const { data, isLoading } = useQuery('get-pic-of-the-day', getPicOfTheDay);

  return View({ containerRef, data, isLoading });
};

export default Container;
