import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  styles: {
    global: {
      body: {
        fontFamily: 'Montserrat',
      },
    },
  },
  colors: {
    brand: {
      500: '#2c5aff',
      600: '#122f96',
    },
    accent: {
      400: '#ffd8ca',
      500: '#ffbba4',
      600: '#ff9672',
      700: '#e77751',
    },
    light: {
      500: '#e3e5f2',
    },
    bg: {
      500: '#00071c',
    },
  },
  fontSizes: {
    xs: '0.75rem',
    sm: '0.875rem',
    md: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
    '6xl': '4rem',
  },
  components: {
    Button: {
      baseStyle: {
        _focus: {
          boxShadow: 'none',
        },
      },
      variants: {
        outline: (props) => ({
          bg: 'white',
          borderWidth: 1,
          boxShadow: '0 0 2px 2px #efdfde',
          //@ts-ignore
          borderColor: props.theme.colors.brand[500],
          _hover: {
            bg: '#f1f1f1',
          },
        }),
        solid: (props) => ({
          color: 'white',
          fontFamily: 'Montserrat',
          fontWeight: '600',
          //@ts-ignore
          bg: props.theme.colors.brand[500],
          _hover: {
            //@ts-ignore
            bg: props.theme.colors.brand[600],
          },
        }),
      },
    },
  },
});
