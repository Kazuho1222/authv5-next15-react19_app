'use server'

import { signIn } from "@/auth";
import { signInInputSchema } from "../types/schemas/sign-in-input-schema";

export const signInAction = async (_: unknown, formData: FormData) => {
  const submission = parseWithZod(formData, { schema: signInInputSchema })

  if (submission.status !== 'success') {
    return submission.reply()
  }

  await signIn('credentials', {
    email: submission.value.email,
    password: submission.value.password,
    redirect: true,
    redirectTo: '/',
  })

  return submission.reply()
}