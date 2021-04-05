import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  styles: {
    global: {
      body: {
        fontFamily: 'Gothic A1',
      },
    },
  },
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
  colors: {
    brand: {
      500: '#2c5aff',
      600: '#122f96',
    },
    light: {
      500: '#e3e5f2',
    },
    bg: {
      500: '#2f2929',
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
      variants: {
        outline: (props) => ({
          bg: 'white',
          boxShadow: '0 0 2px 2px #efdfde',
          borderWidth: 1,
          //@ts-ignore
          borderColor: props.theme.colors.brand[500],
          _hover: {
            bg: '#f1f1f1',
          },
        }),
        solid: (props) => ({
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
