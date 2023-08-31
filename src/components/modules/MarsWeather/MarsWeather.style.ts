import { BoxProps, FlexProps, StackProps, WrapProps } from '@chakra-ui/layout';

export const getStyles = () => ({
  container: {
    p: 10,
    h: '100vh',
    direction: 'column',
    fontWeight: 'bold',
  } as FlexProps,

  header: {
    fontSize: '35px',
    fontWeight: 'bold',
    color: 'accent.700',
  } as BoxProps,

  content: {
    h: '100%',
    direction: 'column',
    mt: 5,
  } as FlexProps,

  cardContainer: {
    flex: 1,
    h: '100%',
    mt: 10,
    spacing: 6,
    justifyContent: 'center',
    alignItems: 'center',
  } as WrapProps,

  card: {
    p: 5,
    borderRadius: '20px',
    boxShadow: '0px 0px 19px 0px rgb(0, 0, 0, 0.2)',
    flex: 1,
    h: '400px',
    minW: '300px',
    color: '#fff',
    spacing: 6,
  } as StackProps,
});
