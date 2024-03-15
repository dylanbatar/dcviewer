import { create } from 'zustand';
import { ICompose } from '../interfaces/compose';

interface composeStore {
  compose?: ICompose;
  collection: ICompose[];
  setCompose: (compose: ICompose) => void;
  clearCompose: () => void;
  setCollection: (compose: ICompose[]) => void;
}

export const useComposeStore = create<composeStore>((set) => ({
  compose: undefined,
  collection: [],
  setCompose: (compose) => set(() => ({ compose: compose })),
  clearCompose: () => set(() => ({ compose: undefined })),
  setCollection: (compose: ICompose[]) =>
    set((state) => ({ collection:  state.collection.concat(compose) })),
}));
