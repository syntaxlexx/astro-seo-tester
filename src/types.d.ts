export type Session = {
  id: string;
  expiresAt: Date;
  fresh: boolean;
  userId: User["id"];
};

export type PaginationMeta = {
  current_page: number;
  from: number;
  last_page: number;
  path: string;
  per_page: number;
  to: number;
  total: number;
};

export type PaginationLink = {
  first: string;
  last: string;
  next: string | null;
  prev: string | null;
};

export interface User {
  id: number;
  name: string;
  email: string;
  email_verified_at?: string;
  role: "USER" | "ADMIN";
}

export type LoginResponse = {
  user: User;
  access_token: string;
};

export type Category = {
  id: number;
  name: string;
  slug: string;
  description: string;
  featured_img: string;
};

export type Post = {
  id: number;
  title: string;
  slug: string;
  content: string;
  published_at: string | null;
  published_at_human: string | null;
  created_at: string;
  created_at_human: string;
  featured_img: string;
  category_id: number | null;
  user_id: number;
  excerpt: string;
};

export type PostWithUserAndCategory = Post & {
  user: User | null;
  category: Category | null;
};

export type PaginatedPostsWithUserAndCategory = {
  data: PostWithUserAndCategory[];
  meta: PaginationMeta;
  links: PaginationLink;
};
