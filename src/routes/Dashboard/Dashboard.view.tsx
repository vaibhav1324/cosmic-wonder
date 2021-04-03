import React from 'react';
import { DashboardGeneratedProps } from './Dashboard.props';
import { withMotion } from 'components/primitives/withMotion';

const View = (props: DashboardGeneratedProps) => {
  return <div style={{ height: 1000 }}></div>;
};

export default withMotion(View);
