import { ImageProps } from '@chakra-ui/image';
import { BoxProps, FlexProps, StackProps } from '@chakra-ui/layout';

export const getStyles = (theme: any) => ({
  container: {
    p: 20,
    color: '#fff',
    direction: 'column',
    minH: '100vh',
  } as FlexProps,

  listContainer: {
    spacing: 4,
    flexDirection: 'row',
    py: 10,
    alignSelf: 'center',
    flex: 1,
  } as StackProps,

  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  } as FlexProps,

  card: {
    h: '100%',
    w: ['150px', '300px'],
    maxH: ['300px', '400px'],
    fontSize: '20px',
    bg: '#f1f1f1',
    userSelect: 'none',
    borderRadius: '5px',
    overflow: 'hidden',
  } as StackProps,

  articleImgContainer: {
    w: '100%',
    overflow: 'hidden',
    h: ['100px', '200px'],
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
  } as BoxProps,
});
