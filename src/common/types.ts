export interface Article {
  id: string;
  title: string;
  previewContent: string;
  content: string;
  publicationDate?: Date;
  comments: Comment[];
  status: 'published' | 'pending' | 'draft' | 'recalled';
  rating: number;
  category: Category;
  author: PublicUser;
  tags: string[];
  hub?: Hub;
  // contributors: PublicUser[] will be in future.
  viewsNumber: number;
}

export interface Hub {
  id: string;
  name: string;
  creationDate: Date;
  publications: Article[];
  members: PublicUser[];
  subscribers: PublicUser[];
  about?: string;
  rating: number;
  tags: string[];
  links: string[];
}

export type PublicUser = Omit<User, 'draft' | 'email' | 'bookmarks'>;
export type Category =
  | 'development'
  | 'administration'
  | 'design'
  | 'managment'
  | 'marketing';

export interface User {
  id: string;
  nickname: string;
  fullName?: string;
  email: string;
  registrationDate: Date;
  rating: number;
  draft: Article['id'][];
  publications: Article['id'][];
  about?: string;
  bookmarks: Article['id'][]; // string === Article.id
  subscriptions: Array<Hub['id'] | User['id']>;
  links: string[];
}

export type CommentAuthor = Omit<
  PublicUser,
  | 'about'
  | 'registrationDate'
  | 'id'
  | 'rating'
  | 'subscriptions'
  | 'publications'
  | 'links'
>;
export interface Comment {
  text: string;
  author: CommentAuthor;
  rating: number;
  creationDate: Date;
}
