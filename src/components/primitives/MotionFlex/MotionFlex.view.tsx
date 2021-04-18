import React from 'react';
import { Flex } from '@chakra-ui/layout';
import { HTMLMotionProps, motion } from 'framer-motion';
import { HTMLChakraProps } from '@chakra-ui/system';

type Merge<P, T> = Omit<P, keyof T> & T;
export type MotionFlexProps = Merge<
  HTMLChakraProps<'div'>,
  HTMLMotionProps<'div'>
>;

const MotionFlex: React.FC<MotionFlexProps> = motion(Flex);

export default MotionFlex;
