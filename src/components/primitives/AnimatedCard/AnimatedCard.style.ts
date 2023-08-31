import { brandBoxShadow } from 'constants/styles';

import { MotionBoxProps } from '../MotionBox';

export const getStyles = (theme: any) => ({
  container: {
    m: 5,
    p: 5,
    bg: 'white',
    cursor: 'pointer',
    borderRadius: '5px',
    boxShadow: brandBoxShadow,
    whileHover: {
      scale: 1.03,
      transition: {
        easings: 'easeInOut',
      },
    },
    whileTap: {
      scale: 0.99,
    },
  } as MotionBoxProps,
});
