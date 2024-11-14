export type CardProps = {
  id: number | string;
  title?: string;
  body: string,
  name?: string;
};

export type Card = {
  card: CardProps;
};