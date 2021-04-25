/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { ImageProps } from '@chakra-ui/image';
import { BoxProps, StackProps } from '@chakra-ui/layout';
import { MotionFlexProps } from 'components/primitives/MotionFlex';

export const getStyles = (
  theme: any,
  isVisible?: boolean,
  hover?: Array<number>,
  delay?: number,
) => ({
  mainContainer: {
    bg: '#fff',
    minH: '100vh',
    p: 20,
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
  } as BoxProps,

  innerContainer: {
    w: '100%',
    maxW: '1200px',
    h: '100%',
    maxH: '100vh',
    position: 'inherit',
    alignSelf: 'center',
  } as BoxProps,

  item: {
    alignItems: 'center',
    animate: [isVisible ? 'zoom' : 'hide', 'hover'],
    variants: {
      zoom: {
        opacity: 1,
        scale: 1,
        transition: {
          damping: 10,
          ease: 'easeInOut',
          delay: 0.3,
          duration: 0.8,
        },
      },
      hide: {
        opacity: 0,
        scale: 0,
        transition: {
          damping: 10,
          ease: 'easeInOut',
          duration: 0.5,
        },
      },
      hover: {
        y: hover ?? [],
        transition: {
          delay: 1 + (delay ?? 0.2),
          loop: Infinity,
          duration: 3.5,
          easings: 'easeInOut',
        },
      },
    },
    userSelect: 'none',
  } as MotionFlexProps,

  image: {
    maxW: '180px',
    onDragStart: (e) => e.preventDefault(),
  } as ImageProps,

  textContainer: {
    ml: 10,
    spacing: 4,
  } as StackProps,

  text: {
    fontSize: '35px',
    fontWeight: 'bold',
    whiteSpace: 'pre-line',
    lineHeight: 1.2,
  } as BoxProps,
});
