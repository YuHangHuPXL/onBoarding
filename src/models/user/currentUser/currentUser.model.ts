import { z } from 'zod'

const currentUser = z.object({
	uuid: z.string().uuid(),
	createdAt: z.date(),
	updatedAt: z.date(),
	email: z.string(),
	firstName: z.string(),
	lastName: z.string(),
	role: z.string(),
})

export type CurrentUser = z.infer<typeof currentUser>
