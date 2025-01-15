import HappyFace from '@/assets/happy.png'
import SmileFace from '@/assets/smile.png'
import PokerFace from '@/assets/poker.png'
import SadFace from '@/assets/sad.png'
import AngryFace from '@/assets/angry.png'

import { useRating } from '../Provider'
import { useNavigate } from 'react-router-dom'

const btns = [
  {
    img: AngryFace,
    title: 'AngryFace',
    value: 1,
  },
  {
    img: SadFace,
    title: 'SadFace',
    value: 2,
  },
  {
    img: PokerFace,
    title: 'PokerFace',
    value: 3,
  },
  {
    img: SmileFace,
    title: 'SmileFace',
    value: 4,
  },
  {
    img: HappyFace,
    title: 'HappyFace',
    value: 5,
  },
]

const Home = () => {
  const navigate = useNavigate()
  const { setRating } = useRating()

  return (
    <main className='h-screen flex items-center justify-center'>
      <div>
        <h1 className='text-center font-bold text-3xl mb-8 text-primary'>
          How do you rate this event?
        </h1>
        <div className='flex items-center gap-2'>
          {btns.map(btn => (
            <button
              key={btn.value}
              onClick={() => {
                setRating(btn.value)
                navigate('/result')
              }}
            >
              <img
                src={btn.img}
                alt={btn.title}
                className='w-20 h-20 object-cover'
              />
            </button>
          ))}
        </div>
      </div>
    </main>
  )
}

export default Home
