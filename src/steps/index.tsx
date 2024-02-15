'use client'

import { Card } from '@/components/ui/card'
import { Toaster } from '@/components/ui/toaster'
import { Steps } from 'antd'
import { useState } from 'react'
import StepNav from './components/StepNav'
import { FormProvider } from './context/DataContext'
import Step01 from './step/Step01'
import Step02 from './step/Step02'
import Step03 from './step/Step03'
import Step04 from './step/Step04'
import Step05 from './step/Step05'
import Step06 from './step/Step06'
import Step07 from './step/Step07'

const steps: any = {
  0: <Step01 />,
  1: <Step02 />,
  2: <Step03 />,
  3: <Step04 />,
  4: <Step05 />,
  5: <Step06 />,
  6: <Step07 />,
}

const stepsName: any = {
  0: 'Acesso',
  1: 'Dados Pessoais',
  2: 'Endereço',
  3: 'Contato',
  4: 'Área de interesse',
  5: 'Experiência',
  6: 'Formação',
}

export default function CVStep() {
  const [currentStep, setCurrentStep] = useState(0)

  const items: any = Object.values(stepsName).map((str) => ({ title: str }))

  return (
    <div className='lg:py-16 lg:px-32 lg:gap-4 flex flex-col bg-gradient-to-r from-gray-100 via-gray-50 to-gray-200 select-none min-h-screen'>
      <div className='lg:hidden w-full py-8 items-center justify-center flex gap-2 font-semibold'>
        <span className='p-4 rounded-full w-10 h-10 flex items-center justify-center bg-[#0f966f] text-white font-bold'>
          {currentStep + 1}
        </span>
        {stepsName[currentStep]}
      </div>
      <div className='hidden lg:block'>
        <Steps
          labelPlacement='vertical'
          size='small'
          current={currentStep}
          items={items}
        />
      </div>
      <FormProvider>
        <Card className='bg-gray-100 min-h-96 p-8 shadow-md shadow-black/20'>
          {steps[currentStep]}
        </Card>

        <StepNav currentStep={currentStep} setCurrentStep={setCurrentStep} />
      </FormProvider>
      <Toaster />
    </div>
  )
}
