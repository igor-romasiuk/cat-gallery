import { useQuery } from '@tanstack/react-query'
import { Cat } from '../types'

export const useCats = (breedId: string) => {
    const res = useQuery<Cat[]>({
        queryKey: ['cats', breedId],
        queryFn: async () => {
            try {
                const url = breedId 
                    ? `https://api.thecatapi.com/v1/images/search?include_breeds=true&has_breeds=1&limit=10&breed_ids=${breedId}`
                    : 'https://api.thecatapi.com/v1/images/search?include_breeds=true&has_breeds=1&limit=10';
                
                const response = await fetch(url, {
                    headers: {
                        'x-api-key': import.meta.env.VITE_CAT_API_KEY
                    }
                })
                
                if (!response.ok) {
                    throw new Error('Unable to load cats. Please try again later.')
                }

                const cats = await response.json()
                if (!cats || cats.length === 0) {
                    throw new Error('No cats available')
                }

                return cats
            } catch (error) {
                if (error instanceof Error) {
                    throw new Error(error.message)
                }
                throw new Error('An unexpected error occurred')
            }
        },
        retry: 2,
        retryDelay: 1000,
        refetchOnWindowFocus: false,
    })

    return res
}