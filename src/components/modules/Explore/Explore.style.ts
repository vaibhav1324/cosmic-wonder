import { ImageProps } from '@chakra-ui/image';
import { BoxProps, StackProps } from '@chakra-ui/layout';
import { MotionFlexProps } from 'components/primitives/MotionFlex';

export const getStyles = (theme: any) => ({
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
  } as MotionFlexProps,

  image: {
    maxW: '180px',
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
