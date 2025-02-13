import * as schema from '@/db/schema'
import { env } from '@/env'
import { config } from 'dotenv';
import { drizzle } from 'drizzle-orm/libsql'

config({ path: '.env.local' });

export const db = drizzle({
  connection: {
    url: process.env.TURSO_CONNECTION_URL!,
    authToken: process.env.TURSO_AUTH_TOKEN!,
  },
  schema: schema,
})
