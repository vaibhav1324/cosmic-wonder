/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { ImageProps } from '@chakra-ui/react';
import { AspectRatioProps, BoxProps, StackProps } from '@chakra-ui/layout';

export const getStyles = (theme: any) => ({
  middleContainer: {
    p: 10,
    minH: '102vh',
    maxH: '100vh',
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  } as StackProps,

  blurImage: {
    w: '100%',
    h: '100%',
    maxH: '95vh',
    maxW: '90vw',
    objectFit: 'cover',
    filter: 'blur(20px)',
    borderRadius: '10px',
    position: 'absolute',
  } as ImageProps,

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
    maxW: '85%',
    color: '#fff',
    noOfLines: [10, 7],
  } as BoxProps,

  videoContainer: {
    position: 'relative',
    w: '100%',
    maxW: '500px',
    ratio: 2 / 1,
  } as AspectRatioProps,
});
