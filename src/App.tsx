import React from 'react';
import Routes from 'routes';
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { QueryClientProvider, QueryClient } from 'react-query';

function App(): JSX.Element {
  const client = new QueryClient();

  return (
    <QueryClientProvider client={client}>
      <ChakraProvider>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </ChakraProvider>
    </QueryClientProvider>
  );
}

export default App;
