import { create } from 'zustand';
import { ICompose } from '../interfaces/compose';

interface composeStore {
  compose?: ICompose;
  setCompose: (compose: ICompose) => void;
  clearCompose: () => void;
}

export const useComposeStore = create<composeStore>((set) => ({
  compose: undefined,
  setCompose: (compose) => set(() => ({ compose: compose })),
  clearCompose: () => set(() => ({ compose: undefined })),
}));
