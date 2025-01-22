import {
  useState,
  useEffect,
  createContext,
  ReactNode,
  useContext,
} from 'react'

const RatingContext = createContext<{
  total: number
  rating: any
  setRating: (value: number) => void
}>({
  total: 0,
  rating: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 },
  setRating: () => {},
})

const Provider = ({ children }: { children: ReactNode }) => {
  const [rating, setRating] = useState<any>(
    localStorage.getItem('rating')
      ? JSON.parse(localStorage.getItem('rating')!)
      : {
          1: 0,
          2: 0,
          3: 0,
          4: 0,
          5: 0,
        }
  )
  const [total, setTotal] = useState(0)

  const handleClick = (value: number) => {
    setRating({ ...rating, [value]: rating[value] + 1 })
  }

  useEffect(() => {
    localStorage.setItem('rating', JSON.stringify(rating))
    setTotal(rating[1] + rating[2] + rating[3] + rating[4] + rating[5])
  }, [rating])

  return (
    <RatingContext.Provider value={{ total, rating, setRating: handleClick }}>
      {children}
    </RatingContext.Provider>
  )
}

export default Provider

export const useRating = () => useContext(RatingContext)
