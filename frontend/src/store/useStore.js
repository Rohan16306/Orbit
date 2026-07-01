import { create } from 'zustand';

export const useStore = create((set) => ({
  activeCategoryColor: null,
  setActiveCategoryColor: (color) => set({ activeCategoryColor: color }),
}));
