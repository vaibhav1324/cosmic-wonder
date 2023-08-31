import React from 'react';

import { Image } from '@chakra-ui/react';
import { Box, Flex, SimpleGrid, Text } from '@chakra-ui/layout';
import { Spinner } from '@chakra-ui/spinner';
import { MotionBox } from 'components/primitives/MotionBox';

import { MarsPhotosGeneratedProps } from './MarsPhotos.props';
import { getStyles } from './MarsPhotos.style';

const View: React.FC<MarsPhotosGeneratedProps> = ({ photos, isLoading }) => {
  const styles = getStyles();

  return (
    <Flex {...styles.container}>
      <Text {...styles.header}>Mars Photos</Text>
      {isLoading ? (
        <Box {...styles.loading}>
          <Spinner />
        </Box>
      ) : (
        <SimpleGrid columns={4} spacing={6}>
          {photos?.map((item, index) => (
            <MotionBox key={`${item.id}-${index}`}>
              <Image src={item.img_src} {...styles.image} />
            </MotionBox>
          ))}
        </SimpleGrid>
      )}
    </Flex>
  );
};

export default View;
