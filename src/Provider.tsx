import {
  useState,
  useEffect,
  createContext,
  ReactNode,
  useContext,
} from 'react'

const RatingContext = createContext<{
  rating: any
  setRating: (value: number) => void
}>({
  rating: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 },
  setRating: () => {},
})

const Provider = ({ children }: { children: ReactNode }) => {
  const [rating, setRating] = useState<any>(
    JSON.parse(localStorage.getItem('rating') ?? '') || {
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
    }
  )

  const handleClick = (value: number) => {
    setRating({ ...rating, [value]: rating[value] + 1 })
  }

  useEffect(() => {
    localStorage.setItem('rating', JSON.stringify(rating))
  }, [rating])

  return (
    <RatingContext.Provider value={{ rating, setRating: handleClick }}>
      {children}
    </RatingContext.Provider>
  )
}

export default Provider

export const useRating = () => useContext(RatingContext)
