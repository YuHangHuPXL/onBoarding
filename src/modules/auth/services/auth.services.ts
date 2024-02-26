/*eslint-disable camelcase*/

import httpClient from '@/http/httpClient'
import type { CurrentUser } from '@/models/user/currentUser/currentUser.model'
interface AuthService {
	login: (username: string, password: string) => Promise<void>
	getCurrentUser: () => Promise<CurrentUser>
}
export const authService: AuthService = {
	login: async (username: string, password: string): Promise<void> => {
		const formData = {
			client_id: import.meta.env.VITE_CLIENT_ID,
			client_secret: import.meta.env.VITE_CLIENT_SECRET,
			grant_type: 'password',
			password: password,
			username: username,
		}

		const config = {
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
		}
		const response = await httpClient.post('/auth/token', formData, config)
	},
	getCurrentUser: async (): Promise<CurrentUser> => {
		const response = await httpClient.get('/users/me')
		return response.data
	},
}
