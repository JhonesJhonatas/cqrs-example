import { z } from 'zod';
import { config } from 'dotenv';

config();

const envSchema = z.object({
  PORT: z
    .string()
    .nonempty({ message: 'PORT must be a non-empty string' })
    .transform((val) => Number(val)),
  PG_HOST: z
    .string()
    .nonempty({ message: 'PG_HOST must be a non-empty string' }),
  PG_PORT: z
    .string()
    .nonempty({ message: 'PG_PORT must be a non-empty string' })
    .transform((val) => Number(val)),
  PG_USER: z
    .string()
    .nonempty({ message: 'PG_USER must be a non-empty string' }),
  PG_PASS: z
    .string()
    .nonempty({ message: 'PG_PASS must be a non-empty string' }),
  PG_NAME: z
    .string()
    .nonempty({ message: 'PG_NAME must be a non-empty string' }),
});

const env = envSchema.parse(process.env);

export const envs = {
  PORT: env.PORT,
  PG_HOST: env.PG_HOST,
  PG_PORT: env.PG_PORT,
  PG_USER: env.PG_USER,
  PG_PASS: env.PG_PASS,
  PG_NAME: env.PG_NAME,
};
