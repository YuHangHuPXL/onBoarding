import { z } from 'zod'

export const todoUuidSchema = z.object({
	todoUuid: z.string().uuid(),
})

export type TodoUuid = z.infer<typeof todoUuidSchema>
