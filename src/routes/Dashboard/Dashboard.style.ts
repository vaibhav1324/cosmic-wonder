/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { ImageProps } from '@chakra-ui/image';
import { BoxProps, FlexProps, StackProps } from '@chakra-ui/layout';
import { brandBoxShadow } from 'constants/styles';

export const getStyles = (theme: any) => ({
  container: {
    bg: theme.colors.bg[500],
    w: '100%',
  } as StackProps,

  topContainer: {
    maxH: '100vh',
    justify: 'center',
    overflow: 'hidden',
    alignItems: 'flex-end',
    direction: ['column', 'column', 'row'],
  } as FlexProps,

  bgContainer: {
    flex: 1,
    w: [0, 'auto'],
  } as BoxProps,

  bgImage: {
    w: '100%',
    maxH: '100vh',
    objectFit: 'cover',
    maxW: ['100%', '60%'],
    alignSelf: 'flex-end',
    transform: 'scaleX(-1)',
    objectPosition: '0px 0%',
  } as ImageProps,

  card: {
    p: 10,
    zIndex: 10,
    color: '#fff',
    maxW: '600px',
    m: [10, 10, 0],
    left: [0, 0, 20],
    cursor: 'pointer',
    fontWeight: 'bold',
    alignSelf: 'center',
    position: 'absolute',
    borderRadius: '15px',
    boxShadow: brandBoxShadow,
    bg: theme.colors.brand[500],
    fontSize: ['20px', '20px', '40px'],
  } as BoxProps,

  authorName: {
    fontSize: ['10px', '10px', '20px'],
    textAlign: 'right',
  } as BoxProps,

  imageBlur: {
    top: 0,
    right: 0,
    bottom: 0,
    w: '100%',
    maxH: '100vh',
    overflow: 'hidden',
    position: 'absolute',
    maxW: ['100%', '60%'],
    background: `linear-gradient(to right, ${theme.colors.bg[500]} 0%,transparent,transparent, transparent)`,
  } as BoxProps,

  footer: {
    px: 10,
    py: 20,
    flex: 1,
    fontSize: 'xl',
    color: '#fff',
    fontWeight: 'bold',
    bg: theme.colors.brand[500],
  } as FlexProps,
});
