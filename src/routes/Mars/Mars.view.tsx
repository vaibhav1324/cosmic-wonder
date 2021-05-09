import React from 'react';

import { Image } from '@chakra-ui/image';
import { Flex, Text } from '@chakra-ui/layout';
import { MarsWeather } from 'components/modules/MarsWeather';
import { withMotion } from 'components/primitives/withMotion';

import { MarsGeneratedProps } from './Mars.props';
import { getStyles } from './Mars.style';

const View: React.FC<MarsGeneratedProps> = (props) => {
  const styles = getStyles();

  return (
    <Flex {...styles.container}>
      <Flex {...styles.topContainer}>
        <Text {...styles.h1}>Journey to Mars</Text>
        <Image {...styles.img} />
      </Flex>
      <MarsWeather />
    </Flex>
  );
};

export default withMotion(View);
