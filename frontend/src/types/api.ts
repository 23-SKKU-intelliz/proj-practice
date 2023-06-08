export interface User {
  id: number;
  username: string;
  email: string;
}

export interface ArticleBrief {
  id: number;
  title: String;
  content: String;
  created_at: Date;
  modified_at: Date;
  user: User;
}

export interface Comment {
  id: number;
  content: String;
  created_at: Date;
  modified_at: Date;
  user: User;
}

export interface ArticleDetail extends ArticleBrief {
  comments: Comment[];
}
