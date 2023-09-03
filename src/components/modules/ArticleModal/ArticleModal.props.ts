import { Article } from 'types/article';

export type ArticleModalRef = {
  onOpen: (data: Article | null) => void;
  onClose: () => void;
};

export type ArticleModalProps = {};
