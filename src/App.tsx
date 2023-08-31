import React from 'react';

import { ChakraProvider } from '@chakra-ui/react';

import { QueryClientProvider } from 'react-query';

import { BrowserRouter } from 'react-router-dom';

import Routes from 'routes';

import { theme } from 'theme/theme';
import { queryClient } from 'utils/queryClient';

function App(): JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </ChakraProvider>
    </QueryClientProvider>
  );
}

export default App;
