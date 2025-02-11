'use client'

import { Button, Form, Loader, Separetor, TextField, } from '@/components/justd/ui'

export const SignUpForm = () => {
  const { form, action, lastResult, isPending, fields } = useSignUp()
  const { isPending: isOauthPending, action: oauthAction } = useOauthSignIn()

  return (
    <>
    <Form { ...getFormProps(form) } action = { action } className = "space-y-2.5" >
      { lastResult?.error && Array.isArray(lastResult.error.message) && (
        <div className="bg-danger/15 p-3 rounded-md flex items-center gap-x-2 text-sm text-danger mb-6" >
          <IconTriangleExclamation className="size-4" />
            <p>{ lastResult.error.message.join(',') } </p>
            </div>
    )}

</Form>

  </>
  )
}