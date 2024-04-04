export interface User {
  name: string;
  surname: string;
  username: string;
  avatar?: string;
  role: 'admin' | 'user';
}
