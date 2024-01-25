import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { Key } from 'lucide-react'
import { useState } from 'react'
import DescriptiveBloc from '../components/DescriptiveBloc'
import HeaderStep from '../components/Header'
import { useFormContext } from '../context/DataContext'

function Step01() {
  const { formData, updateField } = useFormContext()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    updateField('acesso', name, value)
  }

  const [data, setData] = useState({
    acesso: {
      login: '',
      senha: '',
      email: '',
      confsenha: '',
      lidoLGPD: false,
    },
  })
  console.log(formData)

  return (
    <div className='flex flex-col'>
      <HeaderStep title='Acesso' icon={Key} className='mb-8' />
      <DescriptiveBloc
        className='mb-8'
        title='Configuração de login e senha.'
        description='  Utilize seu login e senha para se candidatar a vagas e para manter seu
          currículo sempre atualizado. Para sua maior segurança não utilize
          login e senhas iguais, números ou letras sequencias. Ex.: 1234 ou
          abcd, ou login e senhas com menos de 5 characters.'
      />
      <div className='grid lg:grid-cols-4 gap-2'>
        <Input
          placeholder='login'
          name='login'
          onChange={handleChange}
          value={formData.acesso.login}
        />
        <Input
          placeholder='senha'
          name='senha'
          onChange={handleChange}
          value={formData.acesso.senha}
          type='password'
        />
        <Input
          name='confsenha'
          placeholder='Confirmar Senha'
          onChange={handleChange}
          value={formData.acesso.confsenha}
          type='password'
        />
        <Input
          name='email'
          placeholder='Email'
          onChange={handleChange}
          value={formData.acesso.email}
        />
      </div>

      <span className='space-y-4 mt-4 text-[10px]'>
        <article className='border-l-2 pl-2 ml-1 border-[#0f966f] text-gray-500'>
          Você consente livremente quanto ao compartilhamento dos seus dados
          pessoais, exceto sensiveis, com os associados da ACIRP, com a
          finalidade de participação dos processos seletivos que eventualmente
          possam surgir.
        </article>
        <div className='flex flex-col lg:flex-row lg:items-center gap-8'>
          <Button variant={'outline'} size={'sm'} className='text-xs'>
            Termos de uso de dados LGPD
          </Button>
          <span className='flex items-center gap-2 font-semibold text-xs'>
            <Checkbox
              checked={formData.acesso.lidoLGPD}
              onCheckedChange={() =>
                updateField('acesso', 'lidoLGPD', !formData.acesso.lidoLGPD)
              }
            />
            Li e aceito o termo.
          </span>
        </div>
      </span>
    </div>
  )
}

export default Step01
