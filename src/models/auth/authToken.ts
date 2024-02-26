/*eslint-disable camelcase*/

import { z } from 'zod'

const authTokenSchema = z.object({
	access_token: z.string(),
	token_type: z.string(),
	expires_in: z.number(),
	refresh_token: z.string(),
})

export type AuthToken = z.infer<typeof authTokenSchema>
