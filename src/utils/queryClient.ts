import { QueryClient } from 'react-query';

import { createStandaloneToast } from '@chakra-ui/react';

import { theme } from '../theme/theme';

export const toast = createStandaloneToast({ theme });

const showErrorToast = (err?: any) => {
  const error =
    typeof err?.response?.data?.message === 'string'
      ? err?.response?.data?.message
      : 'Something went wrong with the request';

  toast({
    status: 'error',
    title: 'Error',
    description: error,
    isClosable: true,
    duration: 5000,
  });
};

export const queryClient = new QueryClient({
  defaultOptions: {
    mutations: {
      onError: (error: any) => {
        showErrorToast(error);
      },
    },
    queries: {
      retry: false,
      onError: (error: any) => {
        showErrorToast(error);
      },
      refetchOnWindowFocus: false,
    },
  },
});
