import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'

export const env = createEnv({
  server: {
    TURSO_AUTH_TOKEN: z.string(),
    TURSO_CONNECTION_URL: z.string().url(),
    AUTH_SECRET: z.string(),
  },
  runtimeEnv: {
    TURSO_CONNECTION_URL: process.env.TURSO_CONNECTION_URL,
    TURSO_AUTH_TOKEN: process.env.TURSO_AUTH_TOKEN,
    AUTH_SECRET: process.env.AUTH_SECRET,
  },
})
