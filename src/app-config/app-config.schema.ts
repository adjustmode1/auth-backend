import { z } from 'zod';

export const SystemConfigSchema = z.object({
  port: z.number().default(3000),
});

export const AppConfigSchema = z.object({
  system: SystemConfigSchema,
});
