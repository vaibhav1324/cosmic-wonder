import { MotionFlexProps } from 'components/primitives/MotionFlex';

export type ExploreProps = {};

export type ExploreGeneratedProps = {};

export type AnimatedItemProps = MotionFlexProps & {
  containerRef: React.MutableRefObject<null>;
  image: any;
  title: string;
};
