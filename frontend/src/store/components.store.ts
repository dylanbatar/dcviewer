import { create } from 'zustand';

interface sidebarStore {
  isOpen: boolean
  toggleSidebar: () => void
}

export const useSidebarStore = create<sidebarStore>((set) => ({
  isOpen: false,
  toggleSidebar: () => set((state: any) => ({ isOpen: !state.isOpen })),
}));
