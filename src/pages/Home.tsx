import HappyFace from '@/assets/happy.png'
import SmileFace from '@/assets/smile.png'
import PokerFace from '@/assets/poker.png'
import SadFace from '@/assets/sad.png'
import AngryFace from '@/assets/angry.png'
import TuTgi from '@/assets/tu_taunggyi.jpg'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Chart from '../components/Chart'

import { useRating } from '../Provider'

const btns = [
  {
    img: AngryFace,
    title: 'အဆိုးဆုံး',
    value: 1,
  },
  {
    img: SadFace,
    title: 'ဆိုး',
    value: 2,
  },
  {
    img: PokerFace,
    title: 'သင့်',
    value: 3,
  },
  {
    img: SmileFace,
    title: 'ကောင်း',
    value: 4,
  },
  {
    img: HappyFace,
    title: 'အကောင်းဆုံး',
    value: 5,
  },
]

const Home = () => {
  const { total, setRating } = useRating()

  return (
    <main className='min-h-screen grid grid-cols-3'>
      <section className='h-full'>
        <img
          src={TuTgi}
          alt='TU Taunggyi'
          className='w-full h-full object-cover'
        />
      </section>
      <section className='flex items-center justify-center'>
        <div>
          <h1 className='text-center font-bold text-3xl mb-8 text-primary'>
            ယခုပွဲအပေါ်သင့်ရဲ့သတ်မှတ်ချက်
          </h1>
          <div className='flex items-center gap-2'>
            {btns.map(btn => (
              <div
                key={btn.value}
                className='flex flex-col items-center'
              >
                <button
                  onClick={() => {
                    setRating(btn.value)
                  }}
                  className='hover:scale-125 duration-500'
                >
                  <img
                    src={btn.img}
                    alt={btn.title}
                    className='w-20 h-20 object-cover'
                  />
                </button>
                <h5 className='text-sm font-bold'>{btn.title}</h5>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className='flex items-center justify-center'>
        <Card className='flex flex-col w-full max-w-[400px]'>
          <CardHeader className='items-center'>
            <CardTitle>Result</CardTitle>
            <CardDescription>2024-2025</CardDescription>
          </CardHeader>
          <CardContent className='flex-1 pb-0'>
            <Chart />
          </CardContent>
          <CardFooter className='flex-col items-start gap-2 text-sm'>
            <div className='flex gap-2 font-medium leading-none'>
              စုစုပေါင်း {total} ယောက်က မဲပေးခဲ့ပါသည်။
            </div>
          </CardFooter>
        </Card>
      </section>
    </main>
  )
}

export default Home
