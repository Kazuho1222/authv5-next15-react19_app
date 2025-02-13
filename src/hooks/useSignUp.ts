import { useActionState } from "react"
import { useSafeForm } from "./use-safe-form"
import { type SignUpInput, signUpInputSchema } from "@/features/auth/types/schemas/sign-up-input-schema"

export const useSignUp = () => {
  const [lastResult, action, isPending] = useActionState(signUpAction, null)

  const [form, fields] = useSafeForm<SignUpInput>({
    constraint: getZodConstraint(signUpInputSchema),
    lastResult,
    onValidate({ formData }) {
      return parseWithZod(formDatam, { schema: signUpInputSchema })
    },
    defaultValue: {
      email: '',
      password: '',
      passwordConfirmation: '',
    },
  })

  return {
    form,
    fields,
    lastResult,
    action,
    isPending,
  }
}