import React from 'react';

import { ChakraProvider } from '@chakra-ui/react';

import { QueryClientProvider } from 'react-query';

import { HashRouter } from 'react-router-dom';

import Routes from 'routes';

import { theme, queryClient } from 'utils';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <HashRouter basename="/">
          <Routes />
        </HashRouter>
      </ChakraProvider>
    </QueryClientProvider>
  );
}

export default App;
