import { MotionFlexProps } from 'components/primitives/MotionFlex';

export type ExploreProps = {};

export type ExploreGeneratedProps = {};

export type AnimatedItemProps = MotionFlexProps & {
  isVisible: boolean;
  image: any;
  title: string;
  hover: Array<number>;
  delay: number;
  onLinkPress?: () => void;
};
