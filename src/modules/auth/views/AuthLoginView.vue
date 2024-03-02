<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'

import AppText from '@/components/text/AppText.vue'
import AppTitle from '@/components/title/AppTitle.vue'
import type { AuthLoginInput } from '@/models/auth/authLoginForm.model'
import AuthLoginForm from '@/modules/auth/components/AuthLoginForm.vue'
import { useAuthStore } from '@/modules/auth/stores/auth.store'

const { t } = useI18n()
const authStore = useAuthStore()
const router = useRouter()

const errorMessage = ref<string>(t('login.input_placeholder'))

async function onSubmit(data: AuthLoginInput): Promise<void> {
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
			<AppTitle :title-text="t('login.welcome_title')" />
			<AppText
				class="mb-2 text-[17px] font-semibold"
				:text="t('login.welcome_message')"
			/>
			<AuthLoginForm
				class="mb-1"
				@submit="onSubmit"
			/>
			<div class="inline-flex w-full justify-center">
				<AppText
					class="mr-1 text-sm"
					:text="t('login.no_account_question')"
				/>
				<AppText
					class="text-sm font-semibold"
					:text="t('login.no_account_suggestion')"
				/>
			</div>
		</div>
	</div>
</template>
