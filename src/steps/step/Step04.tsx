import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { ScrollArea } from '@/components/ui/scroll-area'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Contact2, Plus, Trash } from 'lucide-react'
import HeaderStep from '../components/Header'
import '../step.css'

function Step04() {
  return (
    <div className='flex flex-col'>
      <HeaderStep title='Contato' icon={Contact2} className='mb-8' />
      <div className='grid sm:grid-cols-2 gap-8 '>
        <div className='grid grid-cols-4 h-min gap-2 '>
          <Select>
            <SelectTrigger className='col-span-4'>
              <SelectValue placeholder='Tipo telefone' />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Tipos :</SelectLabel>
                <SelectItem value='t1'>Tipo 1</SelectItem>
                <SelectItem value='t2'>Tipo 2</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <Input className='col-span-1' placeholder='DDD' />
          <Input className='col-span-3' placeholder='Numero' />
          <Button
            size={'sm'}
            className='flex items-center gap-2 text-xs ml-auto col-span-4 mt-4'
          >
            <Plus size={16} />
            Cadastrar
          </Button>
        </div>
        <ScrollArea className='h-52'>
          <div className='flex flex-col gap-2'>
            <Card className='flex flex-col gap-1 p-4 relative'>
              <Trash
                size={14}
                className='absolute right-4 top-4 text-red-500 cursor-pointer'
              />
              <span className='text-sm font-semibold first-letter:uppercase'>
                residencial
              </span>
              <span className='text-xs'>(83) 99999-9999</span>
            </Card>
            <Card className='flex flex-col gap-1 p-4 relative'>
              <Trash
                size={14}
                className='absolute right-4 top-4 text-red-500 cursor-pointer'
              />
              <span className='text-sm font-semibold first-letter:uppercase'>
                celular
              </span>
              <span className='text-xs'>(83) 99999-9999</span>
            </Card>
          </div>
        </ScrollArea>
      </div>
    </div>
  )
}

export default Step04
