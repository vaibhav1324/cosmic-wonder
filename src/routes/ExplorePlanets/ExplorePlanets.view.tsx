import React from 'react';
import { ExplorePlanetsGeneratedProps } from './ExplorePlanets.props';
import { Flex } from '@chakra-ui/react';
import { withMotion } from 'components/primitives/withMotion';

const View: React.FC<ExplorePlanetsGeneratedProps> = (props) => {
  return <Flex>ExplorePlanets</Flex>;
};

export default withMotion(View);
