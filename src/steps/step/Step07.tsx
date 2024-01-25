import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
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
import { GraduationCap, Plus, Trash } from 'lucide-react'
import { FunctionComponent } from 'react'
import HeaderStep from '../components/Header'

interface Step07Props {}

const Step07: FunctionComponent<Step07Props> = () => {
  return (
    <div className='flex flex-col'>
      <HeaderStep icon={GraduationCap} title={'Formação'} className='mb-8' />
      <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-2'>
        <Select>
          <SelectTrigger className=''>
            <SelectValue placeholder='Escolaridade' />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Escolaridade:</SelectLabel>
              <SelectItem value='t1'>Tipo 1</SelectItem>
              <SelectItem value='t2'>Tipo 2</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <Input placeholder='Nome da instituição' />
        <Input placeholder='Nome do curso' />
        <Input placeholder='Data de inicio' />
        <Input placeholder='Data de fim' />
        <Button className='flex items-center gap-2 '>
          <Plus size={16} /> Cadastrar
        </Button>
      </div>

      <div className='mt-8 grid sm:grid-cols-2'>
        <Card className='relative'>
          <Trash
            size={14}
            className='absolute right-4 top-4 text-red-500 cursor-pointer'
          />
          <CardHeader>
            <CardTitle className='text-base'>Pr. Rafael Arruda</CardTitle>
          </CardHeader>

          <CardContent className='flex flex-col text-xs'>
            <span className='font-semibold'>Ensino Médio</span>
            <span>
              <strong className='font-semibold mr-2'>Data de inicio:</strong>
              12/12/12
            </span>
            <span>
              <strong className='font-semibold mr-2'>Data de conclusão:</strong>
              12/12/12
            </span>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default Step07
