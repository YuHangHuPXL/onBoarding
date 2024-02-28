import { useStorage } from '@vueuse/core'
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

import type { AuthLoginForm } from '@/models/auth/authLoginForm.model'
import type { UserInfo } from '@/models/user/userInfo.model'
import { authService } from '@/modules/auth/services/auth.services'

export const useAuthStore = defineStore('auth', () => {
	const currentUser = ref<UserInfo | null>(null)
	const accessToken = useStorage<string | null>('accessToken', null, localStorage)
	const isAuthenticated = computed<boolean>(() => accessToken.value !== null)

	async function getUserInfo(): Promise<UserInfo> {
		if (currentUser.value !== null) {
			return currentUser.value
		}

		currentUser.value = await authService.getUserInfo()
		return currentUser.value!
	}

	function setCurrentUser(userInfo: UserInfo | null): void {
		currentUser.value = userInfo
	}

	async function login(data: AuthLoginForm): Promise<void> {
		const response = await authService.login(data.username, data.password)
		accessToken.value = response.access_token
	}

	async function logout(): Promise<void> {
		await authService.logout()
		setCurrentUser(null)
		accessToken.value = null
	}

	return {
		currentUser,
		isAuthenticated,
		getUserInfo,
		setCurrentUser,
		login,
		logout,
	}
})
