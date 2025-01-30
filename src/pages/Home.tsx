import HappyFace from '@/assets/happy.png'
import SmileFace from '@/assets/smile.png'
import PokerFace from '@/assets/poker.png'
import SadFace from '@/assets/sad.png'
import AngryFace from '@/assets/angry.png'
import TuTgi from '@/assets/tu-tgi.jpg'
import TuTgiLogo from '@/assets/tutgi-logo.png'
import ItLogo from '@/assets/it-logo.png'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
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
    <div className='flex flex-col h-screen'>
      <header className='z-10 flex items-center py-3 px-8 shadow-lg'>
        <div className='w-20 h-20 overflow-hidden'>
          <img
            src={TuTgiLogo}
            alt='Tu Tgi'
            className='w-full h-full object-cover'
          />
        </div>
        <div className='flex-1 flex justify-center'>
          <h4 className='font-bold text-xl'>
            ၂၀၂၄-၂၀၂၅ ပညာသင်နှစ် မောင်မယ်သစ်လွင်ကြိုဆိုပွဲ နှင့်
            ရှမ်းပြည်နယ်နေ့အကြို Project ပြပွဲ
          </h4>
        </div>
        <div className='w-20 h-20 overflow-hidden'>
          <img
            src={ItLogo}
            alt='Information Technology'
            className='w-full h-full object-cover'
          />
        </div>
      </header>
      <main className='flex-1 gap-2 grid grid-cols-1 lg:grid-cols-3'>
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

        <section className='flex items-center justify-center'>
          <div>
            <h1 className='text-center font-bold text-3xl mb-8 text-primary'>
              ယနေ့ပွဲအပေါ်သင်၏သတ်မှတ်ချက်
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

        <section className='w-full h-full p-4'>
          <img
            src={TuTgi}
            alt='TU Taunggyi'
            className='w-full h-full object-cover'
          />
        </section>
      </main>
    </div>
  )
}

export default Home
