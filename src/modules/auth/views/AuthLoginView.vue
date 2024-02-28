<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'

import AuthLoginForm from '@/modules/auth/components/AuthLoginForm.vue'
import { useAuthStore } from '@/modules/auth/stores/auth.store'

const { t } = useI18n()
const authStore = useAuthStore()
const router = useRouter()

const errorMessage = ref<string>(t('login.input_placeholder'))

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
	<div class="container mx-auto flex h-screen w-[361px] items-center">
		<div>
			<div
				class="rounded border border-red-400 bg-red-100 px-4 py-3 text-red-700"
				:class="{ invisible: errorMessage === t('login.input_placeholder') }"
				role="alert"
			>
				<span class="block sm:inline">{{ errorMessage }}</span>
			</div>
			<h2 class="text-3xl font-bold">{{ t('login.welcome_title') }}</h2>
			<p class="mb-2 text-[17px] font-semibold">{{ t('login.welcome_message') }}</p>
			<AuthLoginForm
				class="mb-1"
				@submit="handleLogin"
			/>
			<div class="inline-flex w-full justify-center">
				<p class="mr-1 text-sm">{{ t('login.no_account_question') }}</p>
				<p class="text-sm font-semibold">{{ t('login.no_account_suggestion') }}</p>
			</div>
		</div>
	</div>
</template>
