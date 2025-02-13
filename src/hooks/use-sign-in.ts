import { useActionState } from "react"
import { useSafeForm } from "./use-safe-form"
import { type SignUpInput, signUpInputSchema } from "@/features/auth/types/schemas/sign-up-input-schema"

export const useSignIn = () => {
  const [lastResult, action, isPending] = useActionState(signInAction, null)

  const [form, fields] = useSafeForm<SignInInput>({
    constraint: getZodConstraint(signInInputSchema),
    lastResult,
    onValidate({ formData }) {
      return parseWithZod(formDatam, { schema: signInInputSchema })
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