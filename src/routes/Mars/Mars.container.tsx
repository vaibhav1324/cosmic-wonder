import React, { useEffect } from 'react';

import { MarsProps } from './Mars.props';

import View from './Mars.view';

const Container: React.FC<MarsProps> = (props) => {
  useEffect(() => {
    window.scroll({
      top: 0,
    });
  }, []);
  return <View />;
};

export default Container;
