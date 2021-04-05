import React from 'react';
import { DashboardGeneratedProps } from './Dashboard.props';
import { withMotion } from 'components/primitives/withMotion';
import { Flex, Text } from '@chakra-ui/layout';
import { Image } from '@chakra-ui/image';
import { Button } from '@chakra-ui/button';
import { logoutEvent } from 'effector/user/events';

const View: React.FC<DashboardGeneratedProps> = (props) => {
  return (
    <Flex flex={1} direction="column" bg="yellow.500">
      <Image src={require('../../res/dashboard_bg.jpg')} />
      <Text>Heyyy</Text>
      <Button onClick={() => logoutEvent()}>Logout</Button>
    </Flex>
  );
};

export default withMotion(View);
