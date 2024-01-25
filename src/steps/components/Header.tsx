import { cn } from '@/lib/utils'
import { ElementType, FunctionComponent, HtmlHTMLAttributes } from 'react'

interface HeaderStepProps extends HtmlHTMLAttributes<HTMLHtmlElement> {
  icon: ElementType
  title: string
}

const HeaderStep: FunctionComponent<HeaderStepProps> = ({
  title,
  icon: Icon,
  ...rest
}) => {
  return (
    <span
      className={cn(
        'bg-[#5d6b5d]/5 shadow p-4 flex items-center rounded-lg border-l-4 border-[#0f966f] gap-2 select-none',
        rest.className
      )}
    >
      <Icon className='text-[#0f966f]' />
      <h1 className='text-[#0f966f] font-bold'>{title}</h1>
    </span>
  )
}

export default HeaderStep
