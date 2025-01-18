export interface Breed {
    id: string;
    name: string;
}

export interface Cat {
    id: string;
    url: string;
    breeds: Breed[];
}

export interface BreedsListProps {
    setBreedId: (breedId: string) => void;
}

export interface CatListProps {
    breedId: string;
}

export interface HeartProps {
    filled: boolean;
} 