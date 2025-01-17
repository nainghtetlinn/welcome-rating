import { Pie, PieChart } from 'recharts'

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from '@/components/ui/chart'

import { useRating } from '../Provider'
import { useMemo } from 'react'

const chartConfig = {
  excellent: { label: 'Excellent' },
  good: { label: 'Good' },
  normal: { label: 'Normal' },
  bad: { label: 'Bad' },
  worst: { label: 'Worst' },
} satisfies ChartConfig

export default function Chart() {
  const { rating } = useRating()

  const chartData = useMemo(() => {
    return [
      { title: 'excellent', value: rating[5], fill: 'hsl(var(--chart-5))' },
      { title: 'good', value: rating[4], fill: 'hsl(var(--chart-4))' },
      { title: 'normal', value: rating[3], fill: 'hsl(var(--chart-3))' },
      { title: 'bad', value: rating[2], fill: 'hsl(var(--chart-2))' },
      { title: 'worst', value: rating[1], fill: 'hsl(var(--chart-1))' },
    ]
  }, [rating])

  return (
    <ChartContainer
      config={chartConfig}
      className='mx-auto aspect-square w-full [&_.recharts-pie-label-text]:fill-foreground'
    >
      <PieChart>
        <Pie
          data={chartData}
          dataKey='value'
          nameKey='title'
          label
        />
        <ChartTooltip content={<ChartTooltipContent />} />
        <ChartLegend
          content={<ChartLegendContent nameKey='title' />}
          className='-translate-y-2 flex-wrap gap-2 [&>*]:basis-1/4 [&>*]:justify-center'
        />
      </PieChart>
    </ChartContainer>
  )
}
