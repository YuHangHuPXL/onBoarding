/*eslint-disable camelcase*/

import { z } from 'zod'

export const authLoginSchema = z.object({
	username: z.string(),
	password: z.string(),
})

export type AuthLoginInput = z.infer<typeof authLoginSchema>
