import React, { useCallback } from 'react';

import { Box, BoxProps } from '@chakra-ui/layout';
import { useTheme } from '@chakra-ui/system';
import { IoIosArrowDropdown } from 'react-icons/io';

import { getStyles } from './ScrollDownIcon.style';

type ScrollDownIconProps = BoxProps & {
  containerRef: React.MutableRefObject<HTMLDivElement | null>;
};

const ScrollDownIcon: React.FC<ScrollDownIconProps> = ({
  containerRef,
  ...props
}) => {
  const theme = useTheme();
  const styles = getStyles(theme);

  const scrollDown = useCallback(() => {
    containerRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <Box
      onClick={scrollDown}
      as={IoIosArrowDropdown}
      {...styles.icon}
      {...props}
    />
  );
};

export default ScrollDownIcon;
