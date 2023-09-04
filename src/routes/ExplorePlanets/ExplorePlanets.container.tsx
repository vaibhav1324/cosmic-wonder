import React, { useEffect } from 'react';

import { ExplorePlanetsProps } from './ExplorePlanets.props';

import View from './ExplorePlanets.view';

const Container: React.FC<ExplorePlanetsProps> = (props) => {
  useEffect(() => {
    window.scroll({
      top: 0,
    });
  }, []);
  return <View />;
};

export default Container;
