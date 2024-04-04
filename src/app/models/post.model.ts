export interface Post {
  message: string;
  author: string;
  created_at: Date;
  image?: string;
  location: string;
  status: 'drafted' | 'deleted' | 'published';
}
