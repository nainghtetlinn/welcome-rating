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
import { useNavigate } from 'react-router-dom'

const Result = () => {
  const navigate = useNavigate()
  return (
    <main className='h-screen flex items-center justify-center'>
      <Card className='flex flex-col w-[350px]'>
        <CardHeader className='items-center'>
          <CardTitle>Result</CardTitle>
          <CardDescription>2024-2025</CardDescription>
        </CardHeader>
        <CardContent className='flex-1 pb-0'>
          <Chart />
        </CardContent>
        <CardFooter className='flex-col gap-2 text-sm'>
          <Button onClick={() => navigate('/')}>Home</Button>
        </CardFooter>
      </Card>
    </main>
  )
}

export default Result
