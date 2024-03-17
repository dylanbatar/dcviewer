import { create } from 'zustand';
import { ICompose, IComposeDetails } from '../interfaces/compose';

interface composeStore {
  compose: IComposeDetails | null;
  collection: ICompose[];
  setCompose: (compose: IComposeDetails) => void;
  clearCompose: () => void;
  setCollection: (compose: ICompose[]) => void;
}

export const useComposeStore = create<composeStore>((set) => ({
  compose: null,
  collection: [],
  setCompose: (compose) => set(() => ({ compose: compose })),
  clearCompose: () => set(() => ({ compose: null })),
  setCollection: (compose: ICompose[]) =>
    set((state) => ({ collection:  state.collection.concat(compose) })),
}));
