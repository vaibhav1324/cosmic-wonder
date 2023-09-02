import React, { useCallback } from 'react';

import { Box, BoxProps } from '@chakra-ui/layout';
import { useTheme } from '@chakra-ui/system';
import { IoIosArrowDropdown } from 'react-icons/io';

import { getStyles } from './ScrollDownIcon.style';

type ScrollDownIconProps = BoxProps;

const ScrollDownIcon: React.FC<ScrollDownIconProps> = (props) => {
  const theme = useTheme();
  const styles = getStyles(theme);

  const handleScrollIntoView = useCallback(() => {
    const element = document.getElementById('section-pic-of-day');

    if (element === null) {
      return;
    }

    element.scrollIntoView({
      behavior: 'smooth',
    });
  }, []);

  return (
    <Box
      onClick={handleScrollIntoView}
      as={IoIosArrowDropdown}
      {...styles.icon}
      {...props}
    />
  );
};

export default ScrollDownIcon;
