import { Image } from '@chakra-ui/image';
import { Box, Link, Stack, Text } from '@chakra-ui/layout';
import { useTheme } from '@chakra-ui/system';
import { useOnScreen } from 'hooks';
import React, { useRef } from 'react';
import { AnimatedItemProps, ExploreGeneratedProps } from './Explore.props';
import { getStyles } from './Explore.style';
import journey from 'res/journey.png';
import explore from 'res/explore.png';
import space_station from 'res/space_station.png';
import { MotionFlex } from 'components/primitives/MotionFlex';
import { useHistory } from 'react-router';
import { ROUTES } from 'constants/routes';

const AnimatedItem: React.FC<AnimatedItemProps> = ({
  isVisible,
  image,
  title,
  hover,
  delay,
  onLinkPress,
  ...props
}) => {
  const theme = useTheme();
  const styles = getStyles(theme, isVisible, hover, delay);

  return (
    <MotionFlex {...styles.item} {...props}>
      <Image {...styles.image} src={image} />
      <Stack {...styles.textContainer}>
        <Text {...styles.text}>{title}</Text>
        <Link color={theme.colors.accent[600]} onClick={onLinkPress}>
          <Text>Read more</Text>
        </Link>
      </Stack>
    </MotionFlex>
  );
};

const View: React.FC<ExploreGeneratedProps> = () => {
  const theme = useTheme();
  const history = useHistory();
  const styles = getStyles(theme);
  const containerRef = useRef(null);
  const { isVisible } = useOnScreen(containerRef);

  return (
    <Box ref={containerRef} {...styles.mainContainer}>
      <Box {...styles.innerContainer}>
        <AnimatedItem
          left={10}
          bottom="40vh"
          position="absolute"
          image={journey}
          title={'Journey to \n Mars'}
          isVisible={isVisible}
          hover={[0, 10, 0, 10, 0]}
          delay={0.3}
          onLinkPress={() => history.push(ROUTES.MARS.path)}
        />
        <AnimatedItem
          position="absolute"
          right={20}
          image={space_station}
          title={'International \n Station'}
          isVisible={isVisible}
          hover={[0, 10, 0, 10, 0]}
          delay={0.6}
          onLinkPress={() => history.push(ROUTES.SPACE_STATION.path)}
        />
        <AnimatedItem
          position="absolute"
          right={60}
          bottom="5vh"
          image={explore}
          title={'Explore new \n Planets'}
          isVisible={isVisible}
          hover={[0, 10, 0, 10, 0]}
          delay={0.9}
          onLinkPress={() => history.push(ROUTES.EXPLORE_PLANETS.path)}
        />
      </Box>
    </Box>
  );
};

export default View;
