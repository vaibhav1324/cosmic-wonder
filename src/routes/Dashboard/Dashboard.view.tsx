import React from 'react';
import { DashboardGeneratedProps } from './Dashboard.props';
import { withMotion } from 'components/primitives/withMotion';
import { Flex, Text } from '@chakra-ui/layout';
import { Image } from '@chakra-ui/image';

const View = (props: DashboardGeneratedProps) => {
  return (
    <Flex h="100%" bg="yellow.300">
      <Image src={require('../../res/dashboard_bg.jpg')} />
      <Text>Heyyy</Text>
    </Flex>
  );
};

export default withMotion(View);
