import React from 'react';

import { Image } from '@chakra-ui/react';
import { AspectRatio, Stack, Text } from '@chakra-ui/layout';
import { Spinner } from '@chakra-ui/spinner';
import { useTheme } from '@chakra-ui/system';

import { PicOfDayGeneratedProps } from './PicOfDay.props';
import { getStyles } from './PicOfDay.style';

const View: React.FC<PicOfDayGeneratedProps> = ({
  data,
  isLoading,
  containerRef,
}) => {
  const theme = useTheme();
  const styles = getStyles(theme);

  return (
    <Stack ref={containerRef} {...styles.middleContainer}>
      {isLoading ? (
        <Spinner color="#fff" size="xl" />
      ) : (
        <>
          <Image src={data?.url} {...styles.blurImage} />
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
