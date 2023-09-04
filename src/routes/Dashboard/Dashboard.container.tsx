import React, { useEffect } from 'react';

import { DashboardProps } from './Dashboard.props';

import View from './Dashboard.view';

const Container: React.FC<DashboardProps> = () => {
  useEffect(() => {
    window.scroll({
      top: 0,
    });
  }, []);

  return <View />;
};

export default Container;
