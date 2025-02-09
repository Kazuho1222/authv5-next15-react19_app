import * as schema from "@/db/schema";
import { drizzle } from "drizzle-orm/libsql";
import { env } from "env";

export const db = drizzle({
  connection: {
    url: env.TURSO_CONNECTION_URL,
    authToken: env.TURSO_AUTH_TOKEN,
  },
  schema: schema,
});
