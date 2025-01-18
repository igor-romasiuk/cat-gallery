import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { useState } from 'react'

import { CatList } from './components/CatList'
import { BreedsList } from './components/BreedsList'

const queryClient = new QueryClient()

function App() {
  const [breedId, setBreedId] = useState('')

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-purple-50 p-8">
      <QueryClientProvider client={queryClient}>
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8 text-purple-800">
            😺 Purr-fect Cat Gallery 🐱
          </h1>
          <div className="mb-8 flex justify-center">
            <BreedsList setBreedId={setBreedId} />
          </div>
          <CatList breedId={breedId} />
        </div>
      </QueryClientProvider>
    </div>
  )
}

export default App
