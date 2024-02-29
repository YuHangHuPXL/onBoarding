import { z } from 'zod'

export const todoSchema = z.object({
	uuid: z.string().uuid(),
	title: z.string(),
	description: z.string(),
	deadline: z.string(),
	completed: z.boolean(),
	createdAt: z.string(),
	updatedAt: z.string(),
})

export type Todo = z.infer<typeof todoSchema>
