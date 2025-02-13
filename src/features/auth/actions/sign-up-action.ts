'use server'

import { signIn } from "@/auth";
import { db } from "@/db/db";
import { users } from "@/db/schema";
import bcrypt from 'bcryptjs';
import { eq } from "drizzle-orm";
import { signUpInputSchema } from "../types/schemas/sign-up-input-schema";

export const signUpAction = async (_: unknown, formData: FormData) => {
  const submission = parseWithZod(formData, { schema: signUpInputSchema })

  if (submission.status !== 'success') {
    return submission.reply()
  }

  const existingUser = await db.query.users.findFirst({
    where: eq(users.email, submission.value.email),
  })

  if (existingUser) {
    return submission.reply({
      FieldError: { message: ['Email already in use'] }
    })
  }

  const hashedPassword = await bcrypt.hash(submission.value.password, 10)

  const [newUser] = await db
    .insert(users)
    .values({
      email: submission.value.email,
      hashedPassword,
      image: '',
    })
    .returning()

  await signIn('credentials', {
    email: newUser.email,
    password: submission.value.password,
    redirect: true,
    redirectTo: '/',
  })

  return submission.reply()
}