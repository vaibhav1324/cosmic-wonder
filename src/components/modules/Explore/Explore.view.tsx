import { Image } from '@chakra-ui/image';
import { Box, Flex, Link, Stack, Text } from '@chakra-ui/layout';
import { useTheme } from '@chakra-ui/system';
import { useOnScreen } from 'hooks';
import React, { useEffect, useRef } from 'react';
import { AnimatedItemProps, ExploreGeneratedProps } from './Explore.props';
import { getStyles } from './Explore.style';
import journey from 'res/journey.png';
import explore from 'res/explore.png';
import space_station from 'res/space_station.png';
import { MotionFlex } from 'components/primitives/MotionFlex';

const AnimatedItem: React.FC<AnimatedItemProps> = ({
  containerRef,
  image,
  title,
  ...props
}) => {
  const theme = useTheme();
  const styles = getStyles(theme);
  const { isVisible } = useOnScreen(containerRef);

  return (
    <MotionFlex {...styles.item} {...props}>
      <Image {...styles.image} src={image} />
      <Stack {...styles.textContainer}>
        <Text {...styles.text}>{title}</Text>
        <Link color={theme.colors.accent[600]}>
          <Text>Read more</Text>
        </Link>
      </Stack>
    </MotionFlex>
  );
};

const View: React.FC<ExploreGeneratedProps> = () => {
  const theme = useTheme();
  const styles = getStyles(theme);
  const containerRef = useRef(null);

  return (
    <Box ref={containerRef} {...styles.mainContainer}>
      <Box {...styles.innerContainer}>
        <AnimatedItem
          left={10}
          bottom="40vh"
          position="absolute"
          image={journey}
          containerRef={containerRef}
          title={'Journey to \n Mars'}
        />
        <AnimatedItem
          position="absolute"
          right={20}
          image={space_station}
          containerRef={containerRef}
          title={'International \n Station'}
        />
        <AnimatedItem
          position="absolute"
          right={60}
          bottom="5vh"
          image={explore}
          containerRef={containerRef}
          title={'Explore new \n Planets'}
        />
      </Box>
    </Box>
  );
};

export default View;
