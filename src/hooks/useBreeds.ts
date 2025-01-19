import { useQuery } from "@tanstack/react-query"
import { Breed } from "../types"

export const useBreeds = () => {
    const res = useQuery<Breed[]>({
        queryKey: ['breeds'],
        queryFn: async () => {
            try {
                const response = await fetch('https://api.thecatapi.com/v1/breeds')
                if (!response.ok) {
                    throw new Error('Unable to load cat breeds. Please try again later.')
                }

                const breeds = await response.json()
                if (!breeds || breeds.length === 0) {
                    throw new Error('No cat breeds available')
                }
                
                return breeds
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