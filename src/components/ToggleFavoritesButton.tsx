interface ToggleFavoritesButtonProps {
    showOnlyFavorites: boolean;
    toggleShowOnlyFavorites: () => void;
}

export const ToggleFavoritesButton = ({ 
    showOnlyFavorites, 
    toggleShowOnlyFavorites 
}: ToggleFavoritesButtonProps) => {
    return (
        <button 
            onClick={toggleShowOnlyFavorites}
            className="px-6 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 
                     transform hover:scale-105 transition-all duration-200 shadow-md
                     focus:ring-2 focus:ring-purple-300 focus:outline-none"
        >
            {showOnlyFavorites ? '😺 Show All Cats' : '❤️ Show Favorites Only'}
        </button>
    );
}; 