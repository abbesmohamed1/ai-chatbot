import { useAuthContextHook } from '@/context/useAuthContext'
import React, { useState } from 'react'
import { useFormContext } from 'react-hook-form'
import TypeSelectionForm from './type-selection-form'

type Props = {}

const RegistrationFormsStep = (props: Props) => {

    const {
        register,
        formState: {errors},
        setValue,
    } = useFormContext()

    const {currentStep} = useAuthContextHook()
    const [onOTP, setOnOTP] = useState<string>('')
    const [onUserType, setOnUserType] = useState<'owner' | 'student'>("owner")

    setValue("otp", onOTP)

    switch (currentStep) {
        case 1:
            return <TypeSelectionForm 
                register={register}
                userType={onUserType}
                setUserType={setOnUserType}
            />
        case 2:
        case 3:
    
        default:
            break;
    }

  return (
    <div>RegistrationFormsStep</div>
  )
}

export default RegistrationFormsStep