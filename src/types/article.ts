export type Article = {
  id: string;
  featured: boolean;
  title: string;
  url: string;
  imageUrl: string;
  newsSite: string;
  summary: string;
  publishedAt: string;
  launches: Array<{ id: string; provider: string }>;
  events: Array<{ id: string; provider: string }>;
};
