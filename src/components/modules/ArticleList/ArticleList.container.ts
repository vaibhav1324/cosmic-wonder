import React from 'react';

import { useToast } from '@chakra-ui/toast';
import { getSpaceArticles } from 'api/articles';
import { useQuery } from 'react-query';

import { ArticleListProps } from './ArticleList.props';
import View from './ArticleList.view';

const Container: React.FC<ArticleListProps> = () => {
  const toast = useToast();
  const { data, isLoading } = useQuery('get-articles', getSpaceArticles, {
    onError: (err: any) => {
      console.log(err);
      toast({
        title: 'Error',
        description: 'Api fetch Error',
        status: 'error',
        isClosable: true,
        duration: 9000,
      });
    },
  });

  return View({ data, isLoading });
};

export default Container;
