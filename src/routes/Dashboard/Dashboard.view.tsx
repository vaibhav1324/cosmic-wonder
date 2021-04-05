import React from 'react';
import { DashboardGeneratedProps } from './Dashboard.props';
import { withMotion } from 'components/primitives/withMotion';
import { Flex, Text } from '@chakra-ui/layout';
import { Button } from '@chakra-ui/button';
import { logoutEvent } from 'effector/user/events';

const View: React.FC<DashboardGeneratedProps> = (props) => {
  return (
    <Flex flex={1} direction="column" p={20} maxW="500px">
      <Text>Dashboard</Text>
      <Button onClick={() => logoutEvent()}>Logout</Button>
    </Flex>
  );
};

export default withMotion(View);
