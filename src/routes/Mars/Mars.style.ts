import { ImageProps } from '@chakra-ui/react';
import { BoxProps, FlexProps } from '@chakra-ui/layout';
import mars from 'res/mars.jpg';

export const getStyles = () => ({
  container: {
    direction: 'column',
    flex: 1,
  } as FlexProps,

  topContainer: {
    bg: 'black',
    direction: 'column',
    h: '100vh',
  } as FlexProps,

  h1: {
    m: 5,
    color: 'accent.700',
    fontSize: [20, 30, 40, 65],
    fontWeight: 'bold',
    textAlign: 'center',
  } as BoxProps,

  img: {
    src: mars,
    w: '100%',
    h: '100%',
    maxH: '600px',
    objectFit: 'contain',
    alignSelf: 'flex-start',
  } as ImageProps,
});
