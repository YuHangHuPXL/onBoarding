<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

import type { AuthLoginForm } from '@/models/auth/authLoginForm.model'
const { t } = useI18n()

const emit = defineEmits<{
	submit: [value: AuthLoginForm]
}>()

const username = ref<string>('')
const password = ref<string>('')

function handleSubmit(): void {
	const formData: AuthLoginForm = {
		username: username.value,
		password: password.value,
	}

	emit('submit', formData)
}
</script>
<template>
	<form @submit.prevent>
		<label for="username-input">{{ t('login.username_label') }}</label>
		<input
			id="username-input"
			v-model="username"
			:placeholder="t('login.input_placeholder')"
			type="text"
		/>
		<label for="password-input">{{ t('login.password_label') }}</label>
		<input
			id="password-input"
			v-model="password"
			:placeholder="t('login.input_placeholder')"
			type="password"
		/>
		<button @click="handleSubmit">{{ t('login.continue') }}</button>
	</form>
</template>
