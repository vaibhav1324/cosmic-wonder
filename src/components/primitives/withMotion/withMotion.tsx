import React from 'react';

import { Flex, FlexProps } from '@chakra-ui/layout';
import { HTMLMotionProps, motion } from 'framer-motion';

type Merge<P, T> = Omit<P, keyof T> & T;
type MotionFlexProps = Merge<FlexProps, HTMLMotionProps<'div'>>;
const MotionFlex: React.FC<MotionFlexProps> = motion(Flex);

const flexProps: MotionFlexProps = {
  minH: '100vh',
  exit: { opacity: 0 },
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.3 },
};

const withMotion = <T extends object>(
  Component: React.ComponentType<T>,
): React.FC<T> => {
  const WithProps = (props: T) => {
    return (
      <MotionFlex {...flexProps}>
        <Component {...props} />
      </MotionFlex>
    );
  };
  return WithProps;
};

export default withMotion;
