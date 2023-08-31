import axios from 'axios';
import { Article } from 'types/article';

export const getSpaceArticles = async (): Promise<Array<Article>> => {
  const { data } = await axios.get<Array<Article>>(
    'https://api.spaceflightnewsapi.net/v3/articles',
  );
  return data;
};
