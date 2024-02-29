import { z } from 'zod'

export const todoSchema = z.object({
	uuid: z.string().uuid(),
	title: z.string(),
	description: z.string(),
	deadline: z.date(),
	isCompleted: z.boolean(),
})

export type Todo = z.infer<typeof todoSchema>
