import React from 'react';
import { MotionBox } from '../MotionBox';
import { AnimatedCardProps } from './AnimatedCard.props';
import { getStyles } from './AnimatedCard.style';
import { useTheme } from '@chakra-ui/system';

const AnimatedCard: React.FC<AnimatedCardProps> = ({ children, ...props }) => {
  const theme = useTheme();
  const styles = getStyles(theme);

  return (
    <MotionBox {...styles.container} {...props}>
      {children}
    </MotionBox>
  );
};

export default AnimatedCard;
