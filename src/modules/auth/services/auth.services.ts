/*eslint-disable camelcase*/

import httpClient from '@/http/httpClient'
import type { AuthToken } from '@/models/auth/authToken'
import type { User } from '@/models/user/user.model'

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

export const authService: AuthService = {
	login: async (username: string, password: string): Promise<AuthToken> => {
		const formData = encodeQueryData({
			client_id: import.meta.env.VITE_CLIENT_ID,
			client_secret: import.meta.env.VITE_CLIENT_SECRET,
			grant_type: 'password',
			password: password,
			username: username,
		})

		const config = {
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
		}

		const response = await httpClient.post('/auth/token', formData, config)
		return response.data
	},
	getCurrentUser: async (): Promise<User> => {
		const response = await httpClient.get('/users/me')
		return response.data
	},
}
