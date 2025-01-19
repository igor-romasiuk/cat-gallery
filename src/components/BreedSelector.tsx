import Select from 'react-select';
import { useBreeds } from "../hooks/useBreeds";
import { BreedsListProps, Breed } from "../types";
import { customStyles } from '../styles/selectStyles';

export const BreedSelector = ({ setBreedId }: BreedsListProps) => {
    const { data, isLoading, error } = useBreeds()

    if (error) return <div className="text-red-500">{error.message}</div>

    const options = [
        { value: '', label: 'All Cats' },
        ...(data?.map((breed: Breed) => ({
            value: breed.id,
            label: breed.name
        })) || [])
    ];

    return (
        <Select
            options={options}
            onChange={(option) => setBreedId(option?.value || '')}
            isLoading={isLoading}
            placeholder="🐱 Select a cat breed"
            styles={customStyles}
            classNames={{
                control: () => 'hover:shadow-md transition-shadow duration-200',
            }}
        />
    )
}