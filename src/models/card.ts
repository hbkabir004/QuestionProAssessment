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

export type OptionType = {
  value: number;
  label: string;
};

export type SelectComponentProps = {
  dataUrl: string;                // URL to fetch data from the API
  labelKey: string;               // Key in data to use as label (e.g., "username" or "title")
  valueKey: string;               // Key in data to use as value (e.g., "id")
  placeholder: string;            // Placeholder text for the select component
  onSelect: (id: number | null) => void; // Callback to handle selection
};

export type MyComponentProps = {
  children: React.ReactNode;
}