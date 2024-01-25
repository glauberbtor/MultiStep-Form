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
import { MapPin } from 'lucide-react'
import HeaderStep from '../components/Header'
import { useFormContext } from '../context/DataContext'
import '../step.css'

function Step03() {
  const { formData, updateField } = useFormContext()

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    updateField('endereco', name, value)
  }
  return (
    <div className='flex flex-col'>
      <HeaderStep title='Endereço' icon={MapPin} className='mb-8' />
      <div className='grid sm:grid-cols-2  gap-2'>
        <Input
          placeholder='CEP'
          name='cep'
          onChange={handleChange}
          value={formData.endereco.cep}
        />
        <Input
          placeholder='UF'
          name='uf'
          onChange={handleChange}
          value={formData.endereco.uf}
        />
        <Input
          placeholder='Cidade'
          name='cidade'
          onChange={handleChange}
          value={formData.endereco.cidade}
        />
        <Input
          placeholder='Endereço'
          name='endereco'
          onChange={handleChange}
          value={formData.endereco.endereco}
        />
        <Input
          placeholder='Logradouro'
          name='logradouro'
          onChange={handleChange}
          value={formData.endereco.logradouro}
        />
        <Input
          placeholder='Bairro'
          name='bairro'
          onChange={handleChange}
          value={formData.endereco.bairro}
        />
        <Input
          placeholder='Complemento'
          className='lg:col-span-2'
          name='complemento'
          onChange={handleChange}
          value={formData.endereco.complemento}
        />
        <Select
          value={formData.endereco.tipoEndereco}
          onValueChange={(value) =>
            updateField('endereco', 'tipoEndereco', value)
          }
          name='tipoEndereco'
        >
          <SelectTrigger className=''>
            <SelectValue placeholder='Tipo de endereço' />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Selecione o tipo:</SelectLabel>
              <SelectItem value='residencial'>Residencial</SelectItem>
              <SelectItem value='empresarial'>Empresarial</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <Input
          placeholder='Numero'
          name='numero'
          onChange={handleChange}
          value={formData.endereco.numero}
        />
      </div>
    </div>
  )
}

export default Step03
