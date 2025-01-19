import { useCats } from "../hooks/useCats";
import { CatListProps, Cat } from "../types";
import { useFavoriteStore } from "../store/useFavoriteStore";
import { Heart } from "./Heart";
import { ToggleFavoritesButton } from './ToggleFavoritesButton';

export const CatList = ({ breedId }: CatListProps) => {
    const { data, isLoading, error } = useCats(breedId);
    const { 
        favorites, 
        addFavorite, 
        removeFavorite, 
        showOnlyFavorites,
        toggleShowOnlyFavorites 
    } = useFavoriteStore();

    if (isLoading) return <div className="text-purple-800 text-xl animate-pulse text-center">Loading cats...</div>
    if (error) return <div className="text-red-500">{error.message}</div>

    const isFavorite = (catId: string) => favorites.some(fav => fav.id === catId);
    
    const toggleFavorite = (cat: Cat) => {
        if (isFavorite(cat.id)) {
            removeFavorite(cat.id);
        } else {
            addFavorite(cat);
        }
    };

    const displayedCats = showOnlyFavorites ? favorites : data;

    return (
        <div className="space-y-6">
            <div className="flex justify-center">
                <ToggleFavoritesButton
                    showOnlyFavorites={showOnlyFavorites}
                    toggleShowOnlyFavorites={toggleShowOnlyFavorites}
                />
            </div>
            {showOnlyFavorites && favorites.length === 0 ? (
                <div className="text-center py-10">
                    <p className="text-2xl text-purple-800 font-medium mb-2">
                        No Favorite Cats Yet! 😿
                    </p>
                    <p className="text-purple-600">
                        Click the heart icon on any cat to add it to your favorites
                    </p>
                </div>
            ) : (
                <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {displayedCats?.map((cat: Cat) => (
                        <li key={cat.id} className="group relative transform hover:scale-[1.02] transition-all duration-200">
                            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                                <div className="relative aspect-[4/3]">
                                    <img 
                                        src={cat.url} 
                                        alt="cat image" 
                                        className="absolute h-full w-full object-cover"
                                    />
                                    <button
                                        onClick={() => toggleFavorite(cat)}
                                        className="absolute top-3 right-3 transform hover:scale-110 
                                                 transition-transform duration-200"
                                    >
                                        <Heart filled={isFavorite(cat.id)} />
                                    </button>
                                </div>
                                <h3 className="py-3 px-4 text-center text-purple-800 font-medium">
                                    {cat.breeds?.[0]?.name || 'Lovely Cat'}
                                </h3>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}