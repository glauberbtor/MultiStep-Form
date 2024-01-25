import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { Check, Plus, Trash, Workflow } from 'lucide-react'
import { FunctionComponent, useState } from 'react'
import HeaderStep from '../components/Header'

interface Step06Props {}

const Step06: FunctionComponent<Step06Props> = () => {
  const qtdXp = 4
  const [isFirstWork, setIsFirstWork] = useState(false)
  return (
    <div className='flex flex-col'>
      <HeaderStep title='Experiência' icon={Workflow} className='mb-8' />
      <div className='flex items-center gap-2 text-xs font-semibold'>
        <Checkbox
          onCheckedChange={() => setIsFirstWork(!isFirstWork)}
          checked={isFirstWork}
        />
        Primeiro emprego
      </div>

      {!isFirstWork && (
        <div className='flex flex-col lg:flex-row gap-2 mt-8'>
          <div className='w-full grid sm:grid-cols-2 lg:grid-cols-4 gap-2 '>
            <Input className='lg:col-span-3' placeholder='Nome empresa' />
            <Select>
              <SelectTrigger className=''>
                <SelectValue placeholder='Cargo' />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Cargo:</SelectLabel>
                  <SelectItem value='t1'>Tipo 1</SelectItem>
                  <SelectItem value='t2'>Tipo 2</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <Input className='lg:col-span-2' placeholder='Data admissão' />
            <Input className='lg:col-span-2' placeholder='Data desligamento' />
            <Textarea
              className='sm:col-span-2 lg:col-span-4 resize-none'
              placeholder='Função na empresa'
            />
          </div>
          <Button className='h-auto group flex sm:ml-auto items-center gap-2'>
            <Check size={16} className='group-active:block hidden' />
            <Plus size={16} className='group-active:hidden block' />
            <span className='lg:hidden'>Cadastrar</span>
          </Button>
        </div>
      )}

      {qtdXp > 0 && (
        <div className='mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4'>
          <Card className='relative'>
            <Trash
              size={14}
              className='absolute right-4 top-4 text-red-500 cursor-pointer'
            />
            <CardHeader>
              <CardTitle className='text-base first-letter:uppercase'>
                teste de empresa
              </CardTitle>
            </CardHeader>

            <CardContent className='flex flex-col text-xs'>
              <span className='first-letter:uppercase font-semibold'>
                vendedor
              </span>
              <span className='truncate'>
                <strong className='font-semibold mr-2'>
                  Função na empresa:
                </strong>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
                obcaecati cupiditate velit dolor fugiat, ratione minima optio,
                earum quos sequi veniam. Saepe aperiam consectetur dignissimos
                cum odit labore ipsa eum?
              </span>
              <span>
                <strong className='font-semibold mr-2'>
                  Data de admissão:
                </strong>
                12/12/12
              </span>
              <span>
                <strong className='font-semibold mr-2'>
                  Data de desligamento:
                </strong>
                12/12/12
              </span>
            </CardContent>
          </Card>

          <Card className='relative'>
            <Trash
              size={14}
              className='absolute right-4 top-4 text-red-500 cursor-pointer'
            />
            <CardHeader>
              <CardTitle className='text-base first-letter:uppercase'>
                teste de empresa
              </CardTitle>
            </CardHeader>

            <CardContent className='flex flex-col text-xs'>
              <span className='first-letter:uppercase font-semibold'>
                vendedor
              </span>
              <span className='truncate'>
                <strong className='font-semibold mr-2'>
                  Função na empresa:
                </strong>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
                obcaecati cupiditate velit dolor fugiat, ratione minima optio,
                earum quos sequi veniam. Saepe aperiam consectetur dignissimos
                cum odit labore ipsa eum?
              </span>
              <span>
                <strong className='font-semibold mr-2'>
                  Data de admissão:
                </strong>
                12/12/12
              </span>
              <span>
                <strong className='font-semibold mr-2'>
                  Data de desligamento:
                </strong>
                12/12/12
              </span>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}

export default Step06
