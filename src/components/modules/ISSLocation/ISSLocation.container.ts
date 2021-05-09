import React, { useEffect } from 'react';
import { useQuery } from 'react-query';
import { ISSLocationProps } from './ISSLocation.props';
import View from './ISSLocation.view';
import { getISSCurrentLocation } from 'api/iss';
import { useToast } from '@chakra-ui/toast';

const Container: React.FC<ISSLocationProps> = () => {
  const toast = useToast();

  const { data, isLoading, refetch } = useQuery(
    'get-iss-current-location',
    getISSCurrentLocation,
    {
      onError: (err) => {
        console.log(err);
        toast({
          status: 'error',
          title: 'Error',
          description: 'Error getting location',
          isClosable: true,
          duration: 9000,
        });
      },
    },
  );

  useEffect(() => {
    const interval = setInterval(() => refetch(), 5000);

    return () => clearInterval(interval);
  }, []);

  return View({ data, isLoading });
};

export default Container;
