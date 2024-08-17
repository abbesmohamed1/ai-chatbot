"use client"

import SignUpFormProvider from "@/components/forms/sign-up/form-provider"
import RegistrationFormsStep from "@/components/forms/sign-up/registration-step"

type Props = {}

function SignUp(props: Props) {
  return (
    <div className="flex-1 py-36 md:px-16 w-full">
      <div className="flex flex-col h-full gap-3">
        <SignUpFormProvider>
          <div className="flex flex-col gap-3">
              <RegistrationFormsStep></RegistrationFormsStep>
          </div>
        </SignUpFormProvider>
      </div>
    </div>
  )
}

export default SignUp