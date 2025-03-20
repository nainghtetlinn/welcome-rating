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
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogFooter,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from '@/components/ui/dialog'
// import { Button } from '@/components/ui/button'
import Chart from '../components/Chart'

import { useRating } from '../Provider'
import { useEffect, useState } from 'react'

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
  const [lastClicked, setLastClicked] = useState<any>()

  const handleClick = (value: number) => {
    setRating(value)
    setLastClicked(btns[value - 1])

    setTimeout(() => {
      setLastClicked(undefined)
    }, 2000)
  }

  return (
    <>
      {/* <Dialog
        open={open}
        onOpenChange={setOpen}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Delete Candidate</DialogTitle>
          </DialogHeader>
          <DialogFooter>
            <Button
              variant='secondary'
              onClick={() => setOpen(false)}
            >
              Cancel
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog> */}

      {lastClicked && (
        <div className='fixed inset-0 z-50'>
          <div className='absolute inset-0 bg-black/60'></div>
          <div className='absolute inset-0 flex items-center justify-center'>
            <div className='relative text-primary bg-primary-foreground inline-block w-[200px] p-4 rounded-lg'>
              <h3 className='font-bold text-2xl text-center mb-4'>
                {lastClicked.title}
              </h3>
              <div className='flex justify-center'>
                <img
                  src={lastClicked.img}
                  alt={lastClicked.title}
                  className='w-30 h-30 object-cover'
                />
              </div>
            </div>
          </div>
        </div>
      )}

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
              ၂၀၂၅ ခုနှစ်၊ (၇၈)နှစ်မြောက်ရှမ်းပြည်နယ်နေ့အခမ်းအနား နှင့် Project
              ပြပွဲ
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
                      // onClick={() => {
                      //   setRating(btn.value)
                      // }}
                      onPointerDown={() => {
                        handleClick(btn.value)
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
    </>
  )
}

export default Home
