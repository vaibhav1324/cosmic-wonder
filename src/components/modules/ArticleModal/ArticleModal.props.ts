import { Article } from 'types/article';

export type ArticleModalType = React.ForwardRefExoticComponent<
  ArticleModalProps &
    React.RefAttributes<{
      onOpen: () => void;
      onClose: () => void;
    }>
>;

export type ArticleModalProps = {
  data: Article | null;
};
