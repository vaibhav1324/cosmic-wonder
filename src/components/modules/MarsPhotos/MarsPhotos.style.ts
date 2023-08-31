import { ImageProps } from '@chakra-ui/react';
import { BoxProps, FlexProps } from '@chakra-ui/layout';

export const getStyles = () => ({
  container: {
    p: 10,
    direction: 'column',
  } as FlexProps,

  header: {
    fontSize: '25px',
    fontWeight: 'bold',
    color: 'accent.700',
  } as BoxProps,

  loading: {
    padding: 5,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  } as BoxProps,

  image: {
    h: '300px',
    w: '300px',
    objectFit: 'cover',
  } as ImageProps,
});
