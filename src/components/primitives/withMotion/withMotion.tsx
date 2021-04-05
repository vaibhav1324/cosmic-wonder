import React from 'react';
import { HTMLMotionProps, motion } from 'framer-motion';
import { Flex, FlexProps } from '@chakra-ui/layout';

type Merge<P, T> = Omit<P, keyof T> & T;
type MotionBoxProps = Merge<FlexProps, HTMLMotionProps<'div'>>;
const MotionFlex: React.FC<MotionBoxProps> = motion(Flex);

const flexProps: MotionBoxProps = {
  minH: 'inherit',
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
