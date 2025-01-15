import { Pie, PieChart } from 'recharts'

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart'

import { useRating } from '../Provider'
import { useMemo } from 'react'

const chartConfig = {} satisfies ChartConfig

export default function Chart() {
  const { rating } = useRating()

  const chartData = useMemo(() => {
    return [
      { title: 'Worst', value: rating[1], fill: 'hsl(var(--chart-1))' },
      { title: 'Bad', value: rating[2], fill: 'hsl(var(--chart-5))' },
      { title: 'Normal', value: rating[3], fill: 'hsl(var(--chart-3))' },
      { title: 'Good', value: rating[4], fill: 'hsl(var(--chart-4))' },
      { title: 'Excellent', value: rating[5], fill: 'hsl(var(--chart-2))' },
    ]
  }, [rating])

  return (
    <ChartContainer
      config={chartConfig}
      className='mx-auto aspect-square max-h-[250px] pb-0 [&_.recharts-pie-label-text]:fill-foreground'
    >
      <PieChart>
        <ChartTooltip content={<ChartTooltipContent hideLabel />} />
        <Pie
          data={chartData}
          dataKey='value'
          nameKey='title'
        />
      </PieChart>
    </ChartContainer>
  )
}
