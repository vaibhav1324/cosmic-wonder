import React, { useRef } from 'react';
import { DashboardGeneratedProps } from './Dashboard.props';
import { withMotion } from 'components/primitives/withMotion';
import { Box, Flex, Stack, Text } from '@chakra-ui/layout';
import { getStyles } from './Dashboard.style';
import { useTheme } from '@chakra-ui/system';
import { Image } from '@chakra-ui/image';
import astronaut from 'res/landing_bg.jpeg';
import { PicOfDay } from 'components/modules/PicOfDay';
import { ArticleList } from 'components/modules/ArticleList';
import { ScrollDownIcon } from 'components/primitives/ScrollDownIcon';

const View: React.FC<DashboardGeneratedProps> = () => {
  const theme = useTheme();
  const stackRef = useRef(null);
  const styles = getStyles(theme);

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
      <ArticleList />
      <Flex {...styles.footer}>Footer</Flex>
    </Stack>
  );
};

export default withMotion(View);
