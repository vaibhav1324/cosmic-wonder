import { getSpaceArticles } from 'api/articles';
import React from 'react';
import { useQuery } from 'react-query';
import { ArticleListProps } from './ArticleList.props';
import View from './ArticleList.view';

const Container: React.FC<ArticleListProps> = () => {
  const { data, isLoading } = useQuery('get-articles', getSpaceArticles);

  console.log(data);
  return View({});
};

export default Container;
