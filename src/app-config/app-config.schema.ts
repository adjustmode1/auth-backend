import { z } from 'zod';

export const SystemConfigSchema = z.object({
  port: z.number().default(3000),
});

export const DatabaseConfigSchema = z.object({
  host: z.string(),
  port: z.number(),
  username: z.string(),
  password: z.string(),
  database: z.string(),
});

export const AppConfigSchema = z.object({
  system: SystemConfigSchema,
  database: DatabaseConfigSchema,
});
