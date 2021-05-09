import React, { useEffect } from 'react';

import { SpaceStationProps } from './SpaceStation.props';
import View from './SpaceStation.view';

const Container: React.FC<SpaceStationProps> = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return View({});
};

export default Container;
