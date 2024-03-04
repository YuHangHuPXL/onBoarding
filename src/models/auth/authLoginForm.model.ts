/*eslint-disable camelcase*/

import { z } from 'zod'

export const authLoginSchema = z.object({
	username: z.string().email(),
	password: z.string().min(5),
})

export type AuthLoginInput = z.infer<typeof authLoginSchema>
