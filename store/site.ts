import { create } from "zustand";
import type { Category } from "@/data/brand";

interface SiteState {
  menuOpen: boolean;
  category: Category;
  setMenuOpen: (open: boolean) => void;
  setCategory: (category: Category) => void;
}
export const useSiteStore = create<SiteState>((set) => ({
  menuOpen: false,
  category: "All initiatives",
  setMenuOpen: (menuOpen) => set({ menuOpen }),
  setCategory: (category) => set({ category }),
}));
