import z from "zod";

export const createTaskSChema = z.object({
  title: z.string({
    required_error: "Title is required",
  }),
  description: z
    .string({
      required_error: "Desription must be a string",
    }),
  Date: z.string().datetime().optional(),
});
