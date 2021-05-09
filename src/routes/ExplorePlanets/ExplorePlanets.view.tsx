import React from 'react';

import { Flex } from '@chakra-ui/react';
import { withMotion } from 'components/primitives/withMotion';

import { ExplorePlanetsGeneratedProps } from './ExplorePlanets.props';

const View: React.FC<ExplorePlanetsGeneratedProps> = (props) => {
  return <Flex>ExplorePlanets</Flex>;
};

export default withMotion(View);
