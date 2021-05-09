import React from 'react';

import { Flex } from '@chakra-ui/layout';
import { HTMLChakraProps } from '@chakra-ui/system';
import { HTMLMotionProps, motion } from 'framer-motion';

type Merge<P, T> = Omit<P, keyof T> & T;
export type MotionFlexProps = Merge<
  HTMLChakraProps<'div'>,
  HTMLMotionProps<'div'>
>;

const MotionFlex: React.FC<MotionFlexProps> = motion(Flex);

export default MotionFlex;
