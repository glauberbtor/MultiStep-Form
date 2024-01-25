import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Radio, RadioChangeEvent } from 'antd'
import { User2 } from 'lucide-react'
import { useEffect } from 'react'
import DescriptiveBloc from '../components/DescriptiveBloc'
import HeaderStep from '../components/Header'
import { useFormContext } from '../context/DataContext'
import '../step.css'

function Step02() {
  const { formData, updateField } = useFormContext()

  const onChangeRadio = (e: RadioChangeEvent) => {
    console.log('radio checked', e.target.value)
    updateField('dadosPessoais', 'hasVehicle', e.target.value)
  }

  useEffect(() => {
    if (formData.dadosPessoais.hasVehicle == 'n') {
      updateField('dadosPessoais', 'qtdCarro', 0)
      updateField('dadosPessoais', 'qtdMoto', 0)
    }
  }, [formData.dadosPessoais.hasVehicle])

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    updateField('dadosPessoais', name, value)
  }

  return (
    <div className='flex flex-col'>
      <HeaderStep title='Dados pessoais' icon={User2} className='mb-8' />

      <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-2'>
        <Input
          placeholder='Nome'
          onChange={handleChange}
          name='nome'
          value={formData.dadosPessoais.nome}
        />
        <Input
          placeholder='Nome social'
          onChange={handleChange}
          name='nomeSocial'
          value={formData.dadosPessoais.nomeSocial}
        />
        <Input
          placeholder='Estado civil'
          onChange={handleChange}
          name='estadoCivil'
          value={formData.dadosPessoais.estadoCivil}
        />
        <Input
          placeholder='CPF'
          onChange={handleChange}
          name='CPF'
          value={formData.dadosPessoais.CPF}
        />
        <Input
          placeholder='Data de nascimento'
          onChange={handleChange}
          name='dataNascimento'
          value={formData.dadosPessoais.dataNascimento}
        />
        <Input
          placeholder='Naturalidade'
          onChange={handleChange}
          name='naturalidade'
          value={formData.dadosPessoais.naturalidade}
        />
        <Input
          placeholder='Pretensão salarial'
          onChange={handleChange}
          name='pretensaoSalarial'
          value={formData.dadosPessoais.pretensaoSalarial}
        />
        <Input
          placeholder='Sexo'
          onChange={handleChange}
          name='sexo'
          value={formData.dadosPessoais.sexo}
        />
        <Input
          placeholder='Categoria habilitação'
          onChange={handleChange}
          name='categoriaHabilitacao'
          value={formData.dadosPessoais.categoriaHabilitacao}
        />
        <Input
          disabled={formData.dadosPessoais.hasVehicle == 'n'}
          placeholder='Qtd carro'
          onChange={handleChange}
          name='qtdCarro'
          value={formData.dadosPessoais.qtdCarro}
        />
        <Input
          disabled={formData.dadosPessoais.hasVehicle == 'n'}
          placeholder='Qtd moto'
          onChange={handleChange}
          name='qtdMoto'
          value={formData.dadosPessoais.qtdMoto}
        />

        <label className='flex items-center gap-2 px-2 truncate text-xs font-semibold'>
          Possui veiculo:
          <Radio.Group
            onChange={onChangeRadio}
            value={formData.dadosPessoais.hasVehicle}
            className='flex items-center'
          >
            <Radio value={'s'}>sim</Radio>
            <Radio value={'n'}>não</Radio>
          </Radio.Group>
        </label>
      </div>

      <span className='w-full h-0.5 bg-black/5 my-4' />

      <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-4 '>
        <span className='flex items-center gap-2 font-semibold text-xs '>
          <Checkbox
            checked={formData.dadosPessoais.disponivelMudarDeCidade}
            onCheckedChange={() =>
              updateField(
                'dadosPessoais',
                'disponivelMudarDeCidade',
                !formData.dadosPessoais.disponivelMudarDeCidade
              )
            }
          />
          Disponível para mudar de cidade.
        </span>
        <span className='flex items-center gap-2 font-semibold text-xs'>
          <Checkbox
            checked={formData.dadosPessoais.casaPropria}
            onCheckedChange={() =>
              updateField(
                'dadosPessoais',
                'casaPropria',
                !formData.dadosPessoais.casaPropria
              )
            }
          />
          Possui casa própria.
        </span>
        <span className='flex items-center gap-2 font-semibold text-xs'>
          <Checkbox
            checked={formData.dadosPessoais.possuiFilhos}
            onCheckedChange={() =>
              updateField(
                'dadosPessoais',
                'possuiFilhos',
                !formData.dadosPessoais.possuiFilhos
              )
            }
          />
          Possui filhos.
        </span>
        <span className='flex items-center gap-2 font-semibold text-xs'>
          <Checkbox
            checked={formData.dadosPessoais.moraSozinho}
            onCheckedChange={() =>
              updateField(
                'dadosPessoais',
                'moraSozinho',
                !formData.dadosPessoais.moraSozinho
              )
            }
          />
          Mora sozinho.
        </span>
        <span className='flex items-center gap-2 font-semibold text-xs'>
          <Checkbox
            checked={formData.dadosPessoais.PCD}
            onCheckedChange={() =>
              updateField('dadosPessoais', 'PCD', !formData.dadosPessoais.PCD)
            }
          />
          PCD - Pessoa com deficiência.
        </span>
        <span className='flex items-center gap-2 font-semibold text-xs'>
          <Checkbox
            checked={formData.dadosPessoais.disponivelViajar}
            onCheckedChange={() =>
              updateField(
                'dadosPessoais',
                'disponivelViajar',
                !formData.dadosPessoais.disponivelViajar
              )
            }
          />
          Disponibilidade para viagens.
        </span>
        <span className='flex items-center gap-2 font-semibold text-xs'>
          <Checkbox
            checked={formData.dadosPessoais.curriculoDisponivel}
            onCheckedChange={() =>
              updateField(
                'dadosPessoais',
                'curriculoDisponivel',
                !formData.dadosPessoais.curriculoDisponivel
              )
            }
          />
          Currículo disponível.
        </span>
      </div>

      <DescriptiveBloc
        className='my-8'
        title='Resumo'
        description=' O resumo do currículo é o seu cartão de visitas. A primeira informação
        visualizada pelas empresas. Recomendamos que faça um resumo da sua
        experiencia, conhecimentos e habilidades mais relevantes para o cargo
        pretendido. Aqui você também pode se informar se tem disponibilidade
        para viagens e mudança de cidade.'
      />

      <Textarea
        className='resize-none'
        name='resumoProfissional'
        placeholder='Resumo profissional'
        value={formData.dadosPessoais.resumoProfissional}
        onChange={handleChange}
      />
    </div>
  )
}

export default Step02
