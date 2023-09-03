/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { ImageProps } from '@chakra-ui/react';
import { AspectRatioProps, BoxProps, StackProps } from '@chakra-ui/layout';

export const getStyles = (theme: any) => ({
  middleContainer: {
    px: 10,
    minH: '100vh',
    maxH: '100vh',
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  } as StackProps,

  blurBg: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    position: 'absolute',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    zIndex: '0',
    filter: 'blur(5px)',
  } as BoxProps,

  infoContainer: {
    w: '100%',
    spacing: [2, 6],
    alignItems: 'center',
    position: 'absolute',
  } as StackProps,

  image: {
    h: '50%',
    w: '100%',
    maxH: '50vh',
    maxW: '35vw',
    objectFit: 'cover',
    borderRadius: '10px',
  } as ImageProps,

  title: {
    noOfLines: 1,
    color: '#fff',
    fontWeight: 'bold',
    fontSize: ['15px', '20px'],
  } as BoxProps,

  description: {
    maxW: ['85%', '60%'],
    color: '#fff',
    noOfLines: [10, 7],
    textAlign: 'justify',
  } as BoxProps,

  videoContainer: {
    position: 'relative',
    w: '100%',
    maxW: '500px',
    ratio: 2 / 1,
  } as AspectRatioProps,
});
