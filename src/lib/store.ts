import { create } from 'zustand';
import type { User, Project, Message } from '../types';

interface AppState {
  user: User | null;
  projects: Project[];
  currentProject: Project | null;
  messages: Message[];
  setUser: (user: User | null) => void;
  setProjects: (projects: Project[]) => void;
  setCurrentProject: (project: Project | null) => void;
  addMessage: (message: Message) => void;
}

export const useStore = create<AppState>((set) => ({
  user: null,
  projects: [],
  currentProject: null,
  messages: [],
  setUser: (user) => set({ user }),
  setProjects: (projects) => set({ projects }),
  setCurrentProject: (project) => set({ currentProject }),
  addMessage: (message) => set((state) => ({ 
    messages: [...state.messages, message] 
  })),
}));