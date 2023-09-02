import React from 'react';

import { Image } from '@chakra-ui/react';
import { Spinner } from '@chakra-ui/spinner';
import { Stack, Box, AspectRatio, Text } from '@chakra-ui/layout';

import { useTheme } from '@chakra-ui/system';

import { PicOfDayGeneratedProps } from './PicOfDay.props';
import { getStyles } from './PicOfDay.style';

const View: React.FC<PicOfDayGeneratedProps> = ({ data, isLoading }) => {
  const theme = useTheme();
  const styles = getStyles(theme);

  return (
    <Stack {...styles.middleContainer} id="section-pic-of-day">
      <Box {...styles.blurBg} backgroundImage={`url(${data?.url})`} />
      {isLoading ? (
        <Spinner color="#fff" size="xl" />
      ) : (
        <>
          <Stack {...styles.infoContainer}>
            {data?.url.includes('youtube.com') ? (
              <AspectRatio {...styles.videoContainer}>
                <iframe title="video" src={data.url} allowFullScreen />
              </AspectRatio>
            ) : (
              <Image src={data?.url} {...styles.image} />
            )}
            <Text {...styles.title}>{data?.title}</Text>
            <Text {...styles.description}>{data?.explanation}</Text>
          </Stack>
        </>
      )}
    </Stack>
  );
};

export default View;
