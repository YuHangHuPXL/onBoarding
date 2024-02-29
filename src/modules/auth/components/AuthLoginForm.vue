<script setup lang="ts">
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'

import AppButton from '@/components/button/AppButton.vue'
import AppInput from '@/components/input/AppInput.vue'
import EyeIcon from '@/icons/EyeIcon.vue'
import type { AuthLoginInput } from '@/models/auth/authLoginForm.model'

const { t } = useI18n()

const emit = defineEmits<{
	submit: [value: AuthLoginInput]
}>()

const username = ref<string>('')
const password = ref<string>('')
const passwordFieldType = ref<string>('password')

const hasInputFilledIn = computed<boolean>(() => {
	return username.value === '' || password.value === ''
})

function handleSubmit(): void {
	const formData: AuthLoginInput = {
		username: username.value,
		password: password.value,
	}

	emit('submit', formData)
}

function showPassword(): void {
	passwordFieldType.value = 'text'
}

function hidePassword(): void {
	passwordFieldType.value = 'password'
}
</script>
<template>
	<div class="container">
		<form
			novalidate
			@submit.prevent
		>
			<div class="grid pb-2">
				<label
					class="text-xs font-semibold"
					for="username-input"
					>{{ t('login.email_label') }}</label
				>
				<AppInput
					v-model="username"
					input-type="text"
					:placeholder="t('login.input_placeholder')"
				/>
			</div>
			<div class="mb-1 grid">
				<label
					class="invalid: text-xs font-semibold"
					for="password-input"
					>{{ t('login.password_label') }}</label
				>
				<div class="relative">
					<AppInput
						v-model="password"
						input-type="password"
						:placeholder="t('login.password_placeholder')"
					/>
					<button
						class="absolute bottom-2.5 right-2.5"
						@mousedown="showPassword"
						@mouseleave="hidePassword"
						@mouseup="hidePassword"
					>
						<EyeIcon />
					</button>
				</div>
			</div>
			<p class="mb-16 text-xs font-semibold">{{ t('login.forgot_password') }}</p>
			<AppButton
				:button-text="t('login.continue')"
				class="bg-dark-sanJuan"
				:has-input-filled-in="hasInputFilledIn"
				:has-right-arrow="true"
				@submit="handleSubmit"
			/>
		</form>
	</div>
</template>
