import React, { useRef } from 'react';

import { Image } from '@chakra-ui/react';
import { Box, Flex, Link, Stack, Text } from '@chakra-ui/layout';
import { useTheme } from '@chakra-ui/system';
import { ArticleList } from 'components/modules/ArticleList';
import { Explore } from 'components/modules/Explore';
import { PicOfDay } from 'components/modules/PicOfDay';
import { ScrollDownIcon } from 'components/primitives/ScrollDownIcon';
import { withMotion } from 'components/primitives/withMotion';
import astronaut from 'res/landing_bg.jpeg';

import { DashboardGeneratedProps } from './Dashboard.props';
import { getStyles } from './Dashboard.style';

const View: React.FC<DashboardGeneratedProps> = () => {
  const theme = useTheme();
  const stackRef = useRef(null);
  const styles = getStyles(theme);

  const nasaCopyrightsLink =
    'https://www.nasa.gov/multimedia/guidelines/index.html';

  return (
    <Stack {...styles.container}>
      <Flex {...styles.topContainer}>
        <Box {...styles.bgContainer} />
        <Image src={astronaut} {...styles.bgImage} />
        <Box {...styles.imageBlur} />
        <Box {...styles.card}>
          The Universe is under No obligation to make sense to You!
          <Text {...styles.authorName}>~ Neil deGrasse Tyson</Text>
        </Box>
        <ScrollDownIcon containerRef={stackRef} />
      </Flex>
      <PicOfDay containerRef={stackRef} />
      <Explore />
      <ArticleList />
      <Flex {...styles.footer}>
        <Text cursor="pointer">Created By : Vaibhav R Naik</Text>
        <Text {...styles.copyright}>
          © Nasa Public API&apos;s{' '}
          <Link href={nasaCopyrightsLink}>
            NASA&apos;s official Media Usage Guidelines
          </Link>
        </Text>
      </Flex>
    </Stack>
  );
};

export default withMotion(View);
