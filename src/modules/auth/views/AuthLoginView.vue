<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'

import AuthLoginForm from '@/modules/auth/components/AuthLoginForm.vue'
import { useAuthStore } from '@/modules/auth/stores/auth.store'

const { t } = useI18n()
const authStore = useAuthStore()
const router = useRouter()

const errorMessage = ref<string>('')

async function handleLogin(data: { username: string; password: string }): Promise<void> {
	try {
		await authStore.login(data)
		await router.push('/todos')
	} catch (error) {
		if (error.response.status) {
			errorMessage.value = t('login.bad_credentials_message')
		}
	}
}
</script>

<template>
	<h2>{{ t('login.welcome_title') }}</h2>
	<p>{{ t('login.welcome_message') }}</p>
	<p>{{ errorMessage }}</p>
	<AuthLoginForm @submit="handleLogin" />
	<span>{{ t('login.no_account_question') }}</span>
	<span>{{ t('login.no_account_suggestion') }}</span>
</template>
