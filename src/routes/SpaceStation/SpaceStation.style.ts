import { BoxProps, FlexProps } from '@chakra-ui/layout';

export const getStyles = () => ({
  container: {
    px: 5,
    direction: 'column',
    flex: 1,
  } as FlexProps,

  header: {
    color: 'brand.600',
    fontSize: [20, 30, 40, 65],
    fontWeight: 'bold',
    mx: 5,
    mt: 10,
  } as BoxProps,
});
