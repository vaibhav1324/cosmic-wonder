import axios from 'axios';
import { Article } from 'types/article';

export const getSpaceArticles = async (): Promise<Array<Article>> => {
  const { data } = await axios.get<Array<Article>>(
    'https://www.spaceflightnewsapi.net/api/v2/articles',
  );
  return data;
};
