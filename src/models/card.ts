export type CardProps = {
  id: number | string;
  title?: string;
  body: string;
  name?: string;
  userId?: number;    // For posts, to track user ID
  postId?: number;    // For comments, to track post ID
};

export type Card = {
  card: CardProps;
};