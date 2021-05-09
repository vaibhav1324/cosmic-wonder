import React from 'react';
import { Flex } from '@chakra-ui/layout';
import { withMotion } from 'components/primitives/withMotion';

import { MarsGeneratedProps } from './Mars.props';

const View: React.FC<MarsGeneratedProps> = (props) => {
  return <Flex>Mars</Flex>;
};

export default withMotion(View);
