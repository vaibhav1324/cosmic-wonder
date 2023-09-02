import React from 'react';

import { Button, Center } from '@chakra-ui/react';

import Lottie from 'lottie-react';
import lottie_404 from 'res/404-lottie.json';

import { ROUTE_PATHS } from 'constants/routes';

import { RouteComponentProps } from 'react-router-dom';

import { withMotion } from 'components/primitives/withMotion';

const View: React.FC<RouteComponentProps> = (props) => {
  return (
    <Center p="20px" flex={1} flexDirection="column" gridGap="50px">
      <Center
        maxW="800px"
        overflow="hidden"
        borderRadius="30px"
        boxShadow="0px 0px 50px 0px rgba(0,0,0, 0.2)">
        <Lottie animationData={lottie_404} loop />
      </Center>
      <Button
        size="lg"
        onClick={() => {
          props.history.replace(ROUTE_PATHS.DASHBOARD);
        }}>
        Go Home
      </Button>
    </Center>
  );
};

export default withMotion(View);
