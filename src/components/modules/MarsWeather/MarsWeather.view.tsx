import React from 'react';

import { Flex } from '@chakra-ui/layout';

import { MarsWeatherGeneratedProps } from './MarsWeather.props';
import { getStyles } from './MarsWeather.style';

const View: React.FC<MarsWeatherGeneratedProps> = (props) => {
  const styles = getStyles();

  return <Flex {...styles.container}>Weather</Flex>;
};

export default View;
