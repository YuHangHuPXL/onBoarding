import { z } from 'zod'

export const userInfoSchema = z.object({
	uuid: z.string().uuid(),
	role: z.string(),
})

export type UserInfo = z.infer<typeof userInfoSchema>
