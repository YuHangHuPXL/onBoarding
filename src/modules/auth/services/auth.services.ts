/*eslint-disable camelcase*/

import httpClient from '@/http/httpClient'
import type { AuthToken } from '@/models/auth/authToken.model'
import { authTokenSchema } from '@/models/auth/authToken.model'
import type { UserInfo } from '@/models/user/userInfo.model'
import { userInfoSchema } from '@/models/user/userInfo.model'

interface AuthService {
	login: (username: string, password: string) => Promise<AuthToken>
	getUserInfo: () => Promise<UserInfo>
	logout: () => Promise<void>
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
	client_credentials = 'client_credentials',
}

export const authService: AuthService = {
	getUserInfo: async (): Promise<UserInfo> => {
		const response = await httpClient.get('/auth/userinfo')

		userInfoSchema.parse(response.data)

		return response.data
	},
	logout: async (): Promise<void> => {
		await httpClient.post('auth/revoke')
	},
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
}
