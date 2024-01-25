import React, { ReactNode, createContext, useContext, useReducer } from 'react'

interface AcessoData {
  login: string
  senha: string
  email: string
  confsenha: string
  lidoLGPD: boolean
}

interface PersonData {
  nome: string
  nomeSocial: string
  estadoCivil: string
  CPF: string
  dataNascimento: string
  naturalidade: string
  pretensaoSalarial: string
  sexo: string
  categoriaHabilitacao: string
  hasVehicle: string
  qtdCarro: number
  qtdMoto: number
  disponivelMudarDeCidade: boolean
  casaPropria: boolean
  possuiFilhos: boolean
  moraSozinho: boolean
  PCD: boolean
  disponivelViajar: boolean
  curriculoDisponivel: boolean
  resumoProfissional: string
}

interface enderecoData {
  cep: string
  uf: string
  cidade: string
  endereco: string
  logradouro: string
  bairro: string
  complemento: string
  tipoEndereco: string
  numero: string
}

interface FormData {
  acesso: AcessoData
  dadosPessoais: PersonData
  endereco: enderecoData
}

interface FormAction {
  type: string
  payload: {
    step: keyof FormData
    field: string
    value: any
  }
}

interface FormContextType {
  formData: FormData
  updateField: (step: keyof FormData, field: string, value: any) => void
  submitForm: () => void
}

const FormContext = createContext<FormContextType | undefined>(undefined)

const initialState: FormData = {
  acesso: {
    login: '',
    senha: '',
    email: '',
    confsenha: '',
    lidoLGPD: false,
  },
  dadosPessoais: {
    nome: '',
    nomeSocial: '',
    estadoCivil: '',
    CPF: '',
    dataNascimento: '',
    naturalidade: '',
    pretensaoSalarial: '',
    sexo: '',
    categoriaHabilitacao: '',
    hasVehicle: 'n',
    qtdCarro: 0,
    qtdMoto: 0,
    disponivelMudarDeCidade: false,
    casaPropria: false,
    possuiFilhos: false,
    moraSozinho: false,
    PCD: false,
    disponivelViajar: false,
    curriculoDisponivel: false,
    resumoProfissional: '',
  },
  endereco: {
    cep: '',
    uf: '',
    cidade: '',
    endereco: '',
    logradouro: '',
    bairro: '',
    complemento: '',
    tipoEndereco: '',
    numero: '',
  },
}

const formReducer = (state: FormData, action: FormAction): FormData => {
  switch (action.type) {
    case 'UPDATE_FIELD':
      return {
        ...state,
        [action.payload.step]: {
          ...state[action.payload.step],
          [action.payload.field]: action.payload.value,
        },
      }
    // Puedes agregar más casos según sea necesario
    default:
      return state
  }
}

interface FormProviderProps {
  children: ReactNode
}

const FormProvider: React.FC<FormProviderProps> = ({ children }) => {
  const [formData, dispatch] = useReducer(formReducer, initialState)

  const updateField = (step: keyof FormData, field: string, value: string) => {
    dispatch({
      type: 'UPDATE_FIELD',
      payload: { step, field, value },
    })
  }

  const submitForm = () => {
    // Implemente a lógica do evento aqui, se necessário
    console.log('Evento disparado!')
  }

  return (
    <FormContext.Provider value={{ formData, updateField, submitForm }}>
      {children}
    </FormContext.Provider>
  )
}

const useFormContext = (): FormContextType => {
  const context = useContext(FormContext)
  if (!context) {
    throw new Error('useFormContext must be used within a FormProvider')
  }
  return context
}

export { FormProvider, useFormContext }
