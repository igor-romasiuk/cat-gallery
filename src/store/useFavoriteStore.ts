import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { Cat } from '../types'

interface FavoriteStore {
  favorites: Cat[];
  addFavorite: (cat: Cat) => void;
  removeFavorite: (catId: string) => void;
  showOnlyFavorites: boolean;
  toggleShowOnlyFavorites: () => void;
}

export const useFavoriteStore = create<FavoriteStore>()(
  persist(
    (set) => ({
      favorites: [],
      showOnlyFavorites: false,
      addFavorite: (cat) =>
        set((state) => ({
          favorites: [...state.favorites, cat],
        })),
      removeFavorite: (catId) =>
        set((state) => ({
          favorites: state.favorites.filter((cat) => cat.id !== catId),
        })),
      toggleShowOnlyFavorites: () =>
        set((state) => ({
          showOnlyFavorites: !state.showOnlyFavorites,
        })),
    }),
    {
      name: 'favorite-cats',
    }
  )
) 