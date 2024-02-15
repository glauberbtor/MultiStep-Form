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
import { useState } from 'react'
import HeaderStep from '../components/Header'
import { useFormContext } from '../context/DataContext'
import '../step.css'

interface Telefone {
  tipo: string
  ddd: string
  numero: string
}

function Step04() {
  const { formData, updateField } = useFormContext()
  const [novoTelefone, setNovoTelefone] = useState<Telefone>({
    tipo: '',
    ddd: '',
    numero: '',
  })

  const handleAddTelefone = () => {
    const telefones = Array.isArray(formData.telefone) ? formData.telefone : []
    const novoTelefoneObj = { ...novoTelefone }
    updateField('telefone', 'telefone', [...telefones, novoTelefoneObj])
    setNovoTelefone({ tipo: '', ddd: '', numero: '' })
  }

  const handleRemoveTelefone = (index: number) => {
    const novosTelefones = [...formData.telefone]
    novosTelefones.splice(index, 1)
    updateField('telefone', 'telefone', novosTelefones)
  }

  const handleChangeNovoTelefone = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setNovoTelefone((prevTelefone) => ({
      ...prevTelefone,
      [name]: value,
    }))
  }

  console.log(formData.telefone)
  return (
    <div className='flex flex-col'>
      <HeaderStep title='Contato' icon={Contact2} className='mb-8' />
      <div className='grid sm:grid-cols-2 gap-8 '>
        <div className='grid grid-cols-4 h-min gap-2 '>
          <Select
            name='tipo'
            onValueChange={(value) =>
              setNovoTelefone({
                tipo: value,
                numero: novoTelefone.numero,
                ddd: novoTelefone.ddd,
              })
            }
          >
            <SelectTrigger className='col-span-4'>
              <SelectValue placeholder='Tipo telefone' />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Tipos :</SelectLabel>
                <SelectItem value='residencial'>Residencial</SelectItem>
                <SelectItem value='celular'>Celular</SelectItem>
                {/* Adicione mais tipos, se necessário */}
              </SelectGroup>
            </SelectContent>
          </Select>
          <Input
            className='col-span-1'
            placeholder='DDD'
            name='ddd'
            value={novoTelefone.ddd}
            onChange={handleChangeNovoTelefone}
          />
          <Input
            className='col-span-3'
            placeholder='Numero'
            name='numero'
            value={novoTelefone.numero}
            onChange={handleChangeNovoTelefone}
          />
          <Button
            size={'sm'}
            className='flex items-center gap-2 text-xs ml-auto col-span-4 mt-4'
            onClick={handleAddTelefone}
          >
            <Plus size={16} />
            Cadastrar
          </Button>
        </div>
        <ScrollArea className='h-52'>
          <div className='flex flex-col gap-2'>
            {Array.isArray(formData.telefone) &&
              formData.telefone.map((telefone, index) => (
                <Card key={index} className='flex flex-col gap-1 p-4 relative'>
                  <Trash
                    size={14}
                    className='absolute right-4 top-4 text-red-500 cursor-pointer'
                    onClick={() => handleRemoveTelefone(index)}
                  />
                  <span className='text-sm font-semibold first-letter:uppercase'>
                    {telefone.tipo}
                  </span>
                  <span className='text-xs'>{`(${telefone.ddd}) ${telefone.numero}`}</span>
                </Card>
              ))}
          </div>
        </ScrollArea>
      </div>
    </div>
  )
}

export default Step04
