interface IAuthor {
  avatar_url: string;
  name: string;
  role: string;
}

interface IContent {
  id: string;
  type: "paragraph" | "link";
  content: string;
}

export interface IPostProps {
  id: string;
  author: IAuthor;
  published_at: Date;
  content: IContent[];
}
