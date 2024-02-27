import { z } from 'zod'

export const userSchema = z.object({
	uuid: z.string().uuid(),
	createdAt: z.date(),
	updatedAt: z.date(),
	email: z.string(),
	firstName: z.string(),
	lastName: z.string(),
	role: z.string(),
})

export type User = z.infer<typeof userSchema>
