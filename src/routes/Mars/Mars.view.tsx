import React from 'react';

import { Image } from '@chakra-ui/react';
import { Flex, Text } from '@chakra-ui/layout';
import { MarsPhotos } from 'components/modules/MarsPhotos';
import { MarsWeather } from 'components/modules/MarsWeather';
import { withMotion } from 'components/primitives/withMotion';

import { MarsGeneratedProps } from './Mars.props';
import { getStyles } from './Mars.style';

const Header: React.FC = () => {
  const styles = getStyles();

  return (
    <Flex {...styles.topContainer}>
      <Text {...styles.h1}>Journey to Mars</Text>
      <Image {...styles.img} />
    </Flex>
  );
};

const View: React.FC<MarsGeneratedProps> = (props) => {
  const styles = getStyles();

  return (
    <Flex {...styles.container}>
      <Header />
      <MarsWeather />
      <MarsPhotos />
    </Flex>
  );
};

export default withMotion(View);
