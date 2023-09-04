import { ImageProps } from '@chakra-ui/react';
import { BoxProps, FlexProps, StackProps } from '@chakra-ui/layout';

export const getStyles = (theme: any) => ({
  container: {
    p: [2, 4, 20],
    color: theme.colors.brand[600],
    direction: 'column',
    minH: '100vh',
  } as FlexProps,

  listContainer: {
    spacing: 4,
    flexDirection: 'row',
    py: 5,
    alignSelf: 'center',
    flex: 1,
  } as StackProps,

  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  } as FlexProps,

  card: {
    h: ['200px', '22vw'],
    w: ['150px', '22vw'],
    maxH: ['300px', '400px'],
    fontSize: '20px',
    bg: '#f1f1f1',
    userSelect: 'none',
    borderRadius: '10px',
    overflow: 'hidden',
    spacing: 0,
  } as StackProps,

  articleImgContainer: {
    w: '100%',
    overflow: 'hidden',
    h: ['100px', '250px'],
  } as BoxProps,

  articleImg: {
    flex: 1,
    w: '100%',
    h: '100%',
    transition: 'ease-in-out .3s ',
    objectFit: 'cover',
    _hover: {
      transform: 'scale(1.1)',
    },
  } as ImageProps,

  title: {
    px: 4,
    py: 2,
    bg: theme.colors.brand[500],
    flex: 1,
  } as BoxProps,
});
