import { create } from 'zustand';

interface AppState {
  isLoaded: boolean;
  setLoaded: (loaded: boolean) => void;
  cursorType: 'default' | 'hover' | 'project' | 'link';
  setCursorType: (type: 'default' | 'hover' | 'project' | 'link') => void;
}

export const useStore = create<AppState>((set) => ({
  isLoaded: false,
  setLoaded: (loaded) => set({ isLoaded: loaded }),
  cursorType: 'default',
  setCursorType: (type) => set({ cursorType: type }),
}));
