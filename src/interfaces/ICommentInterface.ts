interface IAuthor {
  avatar_url: string;
  name: string;
  role: string;
}

export interface IComment {
  id: string;
  author: IAuthor;
  published_at: Date;
  content: string;
  like: number;
}

export interface ICommentProps extends IComment {
  onDeleteComment: (id: string) => void;
}
