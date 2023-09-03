/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { BoxProps } from '@chakra-ui/layout';

export const getStyles = (theme: any) => ({
  icon: {
    m: 10,
    w: '60px',
    h: '60px',
    color: '#fff',
    borderRadius: 30,
    cursor: 'pointer',
    position: 'absolute',
    left: 'calc(50% - 65px)',
    bottom: 0,
    zIndex: 2,
    transition: 'all .2s ease-in-out',
    _hover: {
      bg: '#fff',
      color: 'black',
      transform: 'scale(1.2)',
    },
    _active: {
      transform: 'scale(0.8)',
    },
  } as BoxProps,
});
