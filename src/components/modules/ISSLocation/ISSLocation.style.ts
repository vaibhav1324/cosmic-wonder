import {
  AspectRatioProps,
  BoxProps,
  FlexProps,
  StackProps,
} from '@chakra-ui/layout';

export const getStyles = () => ({
  container: {
    px: 5,
    flex: 1,
    direction: 'column',
  } as FlexProps,

  title: {
    mt: 5,
    mb: 2,
    fontSize: 25,
    fontWeight: 'bold',
    color: 'accent.600',
  } as BoxProps,

  mapContainer: {
    my: 5,
    borderRadius: 5,
    shadow: 'lg',
    maxH: '500px',
    w: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  } as StackProps,

  map: {
    w: '100%',
    ratio: 16 / 9,
    maxH: '500px',
  } as AspectRatioProps,
});
