'use client'

import { Button, Form, Loader, Separator, TextField, } from '@/components/ui'
import { getFormProps, getInputProps } from '@conform-to/react'
import { IconBrandGithub, IconBrandGoogle, IconTriangleExclamation } from 'justd-icons'
import { Fragment } from 'react'

export const SignInForm = () => {
  const { form, action, lastResult, isPending, fields } = useSignIn()
  const { isPending: isOauthPending, action: oauthAction } = useOauthSignIn()

  return (
    <>
      <Form {...getFormProps(form)} action={action} className="space-y-2.5" >
        <div>
          <TextField
            {...getInputProps(fields.email, { type: 'email' })}
            placeholder='Email'
            defaultValue={lastResult?.initialValue?.email.toString() ?? ''}
            isDisabled={isPending || isOauthPending}
            errorMessage={''}
          />
          <span id={fields.email.errorId} className='text-sm text-red-500'>
            {fields.email.errors}
          </span>
        </div>
        <div>
          <TextField
            {...getInputProps(fields.password, { type: 'password' })}
            placeholder='Password'
            defaultValue={lastResult?.initialValue?.password.toString() ?? ''}
            isDisabled={isPending || isOauthPending}
            errorMessage={''}
          />
          <span id={fields.password.errorId} className='text-sm text-red-500'>
            {fields.password.errors && fields.password.errors?.length > 1
              ? fields.password.errors.map((error) => (
                <Fragment key={error}>
                  {error}
                  <br />
                </Fragment>
              ))
              : fields.password.errors}
          </span>
        </div>
        <Button
          type='submit'
          intent='secondary'
          size='large'
          isDisabled={isPending || isOauthPending}
          className="w-full text-white bg-zinc-900 hover:bg-zinc-950 data-hovered:bg-zinc-800/90 data-pressed:bg-zinc-800/90 relative"
        >
          Continue
          {isPending && <Loader className='absolute top-3 right-3' />}
        </Button>
      </Form>
      <Separator />
      <div className='flex flex-col gap-y-2.5'>
        <OauthButton
          isDisabled={isOauthPending}
          isPending={isPending}
          onClick={() => oauthAction('github')}
          icon={IconBrandGithub}
          label="Continue with Github"
        />
        <OauthButton
          isDisabled={isOauthPending}
          isPending={isPending}
          onClick={() => oauthAction('google')}
          icon={IconBrandGoogle}
          label="Continue with Google"
        />
      </div>
    </>
  )
}