import { Button } from '@/components/ui/button'
import { useFormContext } from '../context/DataContext'

interface StepNavProps {
  currentStep: number
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>
}

function StepNav({ currentStep, setCurrentStep }: StepNavProps) {
  const { formData, submitForm } = useFormContext()

  return (
    <nav className='p-4 lg:p-0 flex items-center gap-2 justify-end'>
      {currentStep > 0 && (
        <Button
          variant={'outline'}
          size={'sm'}
          onClick={() => setCurrentStep((s) => s - 1)}
        >
          Anterior
        </Button>
      )}
      {currentStep < 6 && (
        <Button
          disabled={!formData.acesso.lidoLGPD}
          variant={'outline'}
          size={'sm'}
          onClick={() => setCurrentStep((s) => s + 1)}
        >
          Próximo
        </Button>
      )}
      {currentStep === 6 && (
        <Button variant={'default'} size={'sm'} onClick={submitForm}>
          Concluir
        </Button>
      )}
    </nav>
  )
}

export default StepNav
