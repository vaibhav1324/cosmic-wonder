import React from 'react';

import { Box, Center, Flex, Text, Wrap } from '@chakra-ui/layout';
import { Spinner, Stack } from '@chakra-ui/react';

import { MarsWeatherGeneratedProps } from './MarsWeather.props';
import { getStyles } from './MarsWeather.style';

const View: React.FC<MarsWeatherGeneratedProps> = ({ data, isLoading }) => {
  const styles = getStyles();

  return (
    <Flex {...styles.container}>
      <Text {...styles.header}>Weather on Mars</Text>
      {isLoading ? (
        <Center flex={1}>
          <Spinner />
        </Center>
      ) : (
        <Flex {...styles.content}>
          <Stack isInline>
            <Text>Weather Data collected in Timezone:</Text>
            <Text color="brand.500">{data?.TZ_Data}</Text>
          </Stack>
          <Wrap {...styles.cardContainer}>
            <Stack bg="brand.500" {...styles.card}>
              <Text fontSize="35px">Temperature</Text>
              <Box pl={2}>
                <Text>
                  Min Temp : {data?.min_temp} {data?.unitOfMeasure}
                </Text>
                <Text>
                  Max Temp : {data?.max_temp} {data?.unitOfMeasure}
                </Text>
              </Box>
              <Box pl={2}>
                <Text>
                  Max GTS Temp : {data?.max_gts_temp} {data?.unitOfMeasure}
                </Text>
                <Text>
                  Min GTS Temp : {data?.min_gts_temp} {data?.unitOfMeasure}
                </Text>
              </Box>
              <Box pl={2}>
                <Text>
                  Local UV Radiance index : {data?.local_uv_irradiance_index}
                </Text>
              </Box>
              <Text fontSize="50px">{data?.atmo_opacity}</Text>
            </Stack>
            <Stack bg="accent.500" {...styles.card}>
              <Text fontSize="35px">Pressure</Text>
              <Box pl={2}>
                <Text>Amount : {data?.pressure}ATM</Text>
                <Text>Status : {data?.pressure_string}</Text>
              </Box>
              <Box pl={2}>
                <Text>SOL : {data?.sol}</Text>
                <Text>Season : {data?.season}</Text>
              </Box>
              <Box pl={2}>
                <Text>Sunrise : {data?.sunrise}</Text>
                <Text>Sunset : {data?.sunset}</Text>
              </Box>
              <Box>
                <Text>Terrestrial Date</Text>
                <Text fontSize="30px">{data?.terrestrial_date}</Text>
              </Box>
            </Stack>
          </Wrap>
        </Flex>
      )}
    </Flex>
  );
};

export default View;
