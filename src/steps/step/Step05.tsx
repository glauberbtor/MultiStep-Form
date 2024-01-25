import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
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
import { Plus, Star, Trash } from 'lucide-react'
import HeaderStep from '../components/Header'
import '../step.css'

function Step05() {
  return (
    <div className='flex flex-col'>
      <HeaderStep title='Área de interesse' icon={Star} className='mb-8' />
      <div className='grid sm:grid-cols-2 gap-8'>
        <div className='flex flex-col h-min gap-2 '>
          <Select>
            <SelectTrigger className=''>
              <SelectValue placeholder='Tipo de vaga' />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Tipos:</SelectLabel>
                {/*Conectar com CMS*/}
                <SelectItem value='t1'>Tipo 1</SelectItem>
                <SelectItem value='t2'>Tipo 2</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className=''>
              <SelectValue placeholder='Área de interesse' />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Áreas:</SelectLabel>
                {/*Conectar com CMS*/}
                <SelectItem value='a1'>Área 1</SelectItem>
                <SelectItem value='a2'>Área 2</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>

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
                trainee
              </span>
              <span className='text-xs uppercase'>Comercial</span>
            </Card>
            <Card className='flex flex-col gap-1 p-4 relative'>
              <Trash
                size={14}
                className='absolute right-4 top-4 text-red-500 cursor-pointer'
              />
              <span className='text-sm font-semibold first-letter:uppercase'>
                estagio
              </span>
              <span className='text-xs uppercase'>Comercial</span>
            </Card>
          </div>
        </ScrollArea>
      </div>
    </div>
  )
}

export default Step05
