import { config } from 'dotenv';
import { z } from 'zod';

config();

const EnvSchema = z.object({
  NODE_ENV: z.enum(["development", "test", "production"]).default("development"),
  PORT: z.string().default("4000"),
  CORS_ORIGINS: z.string().default("*"),
  JWT_SECRET: z.string().default("dev_secret_change_me"),
});

type Env = z.infer<typeof EnvSchema>;

const parsed = EnvSchema.safeParse(process.env);
if (!parsed.success) {
  console.error("Invalid environment configuration:", parsed.error.flatten().fieldErrors);
  process.exit(1);
}

export const env: Env = parsed.data;
