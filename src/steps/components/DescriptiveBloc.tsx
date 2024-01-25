import { cn } from '@/lib/utils'
import { FunctionComponent, HtmlHTMLAttributes } from 'react'

interface DescriptiveBlocProps extends HtmlHTMLAttributes<HTMLHtmlElement> {
  title: string
  description: string
}

const DescriptiveBloc: FunctionComponent<DescriptiveBlocProps> = ({
  title,
  description,
  ...rest
}) => {
  return (
    <span
      className={cn(
        'bg-[#5d6b5d]/5 rounded-lg shadow p-4 flex flex-col gap-2 border-l-4 border-[#0f966f]',
        rest.className
      )}
    >
      <h1 className='font-semibold text-[#0f966f]'>{title}</h1>
      <p className='text-xs text-gray-500'>{description}</p>
    </span>
  )
}

export default DescriptiveBloc
