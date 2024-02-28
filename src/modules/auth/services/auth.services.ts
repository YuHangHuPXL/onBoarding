/*eslint-disable camelcase*/

import httpClient from '@/http/httpClient'
import type { AuthToken } from '@/models/auth/authToken.model'
import { authTokenSchema } from '@/models/auth/authToken.model'
import type { User } from '@/models/user/user.model'
import { userSchema } from '@/models/user/user.model'

interface AuthService {
	login: (username: string, password: string) => Promise<AuthToken>
	getCurrentUser: () => Promise<User>
}

function encodeQueryData(data: Record<string, string>): URLSearchParams {
	const params = new URLSearchParams()

	for (const [key, value] of Object.entries(data)) {
		params.append(key, value)
	}

	return params
}

enum GrantType {
	password = 'password',
	authorization_code = 'authorization_code',
	cleitn_credentials = 'client_credentials',
}

export const authService: AuthService = {
	login: async (username: string, password: string): Promise<AuthToken> => {
		const formData = encodeQueryData({
			client_id: import.meta.env.VITE_CLIENT_ID,
			client_secret: import.meta.env.VITE_CLIENT_SECRET,
			grant_type: GrantType.password,
			password: password,
			username: username,
			scope: 'read write',
		})

		const config = {
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
		}

		const response = await httpClient.post('/auth/token', formData, config)

		authTokenSchema.parse(response.data)

		return response.data
	},
	getCurrentUser: async (): Promise<User> => {
		const response = await httpClient.get('/auth/userinfo')

		userSchema.parse(response.data)

		return response.data
	},
}
