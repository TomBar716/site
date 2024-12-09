export type UserRole = 'admin' | 'editor' | 'viewer';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatarUrl?: string;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
  adminId: string;
  collaborators: User[];
}

export interface CodeChange {
  id: string;
  userId: string;
  projectId: string;
  filePath: string;
  content: string;
  comment: string;
  status: 'pending' | 'approved' | 'rejected';
  timestamp: Date;
}

export interface Message {
  id: string;
  content: string;
  userId: string;
  userName: string;
  timestamp: Date;
}

export interface Settings {
  theme: 'light' | 'dark';
  fontSize: number;
  tabSize: number;
  notifications: boolean;
}