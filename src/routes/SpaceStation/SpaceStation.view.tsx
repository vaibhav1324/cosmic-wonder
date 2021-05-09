import React from 'react';
import { Flex, Text } from '@chakra-ui/layout';
import { withMotion } from 'components/primitives/withMotion';
import { SpaceStationGeneratedProps } from './SpaceStation.props';
import { ISSLocation } from 'components/modules/ISSLocation';
import { getStyles } from './SpaceStation.style';

const View: React.FC<SpaceStationGeneratedProps> = (props) => {
  const styles = getStyles();

  return (
    <Flex {...styles.container}>
      <Text {...styles.header}>International Space Station</Text>
      <ISSLocation />
    </Flex>
  );
};

export default withMotion(View);
