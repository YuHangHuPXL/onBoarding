<script setup lang="ts">
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'

import type { AuthLoginForm } from '@/models/auth/authLoginForm.model'

const { t } = useI18n()

const emit = defineEmits<{
	submit: [value: AuthLoginForm]
}>()

const username = ref<string>('')
const password = ref<string>('')
const passwordFieldType = ref<string>('password')

const hasInputFilledIn = computed<boolean>(() => {
	return username.value === '' || password.value === ''
})

function handleSubmit(): void {
	const formData: AuthLoginForm = {
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
				<input
					id="username-input"
					v-model="username"
					class="bg-light-periWinkel invalid: h-12 w-full rounded-lg p-3 invalid:border-red-600 invalid:outline-none invalid:[&:not(:focus)]:border invalid:[&:not(:focus)]:text-red-500"
					pattern="[A-Za-z0-9._+\-']+@[A-Za-z0-9.\-]+\.[A-Za-z]{2,}$"
					:placeholder="t('login.input_placeholder')"
					type="text"
				/>
			</div>
			<div class="mb-1 grid">
				<label
					class="invalid: text-xs font-semibold"
					for="password-input"
					>{{ t('login.password_label') }}</label
				>
				<div class="relative">
					<input
						id="password-input"
						v-model="password"
						class="bg-light-periWinkel h-12 w-full rounded-lg p-3 invalid:border-red-600 invalid:outline-none invalid:[&:not(:focus)]:border"
						pattern=".{5,}"
						:placeholder="t('login.password_placeholder')"
						:type="passwordFieldType"
					/>
					<button
						class="absolute bottom-2.5 right-2.5"
						@mousedown="showPassword"
						@mouseleave="hidePassword"
						@mouseup="hidePassword"
					>
						<svg
							fill="none"
							height="24"
							viewBox="0 0 24 24"
							width="24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M3.11824 12.467C2.96124 12.176 2.96124 11.823 3.11824 11.532C5.01024 8.033 8.50524 5 12.0002 5C15.4952 5 18.9902 8.033 20.8822 11.533C21.0392 11.824 21.0392 12.177 20.8822 12.468C18.9902 15.967 15.4952 19 12.0002 19C8.50524 19 5.01024 15.967 3.11824 12.467V12.467Z"
								stroke="#1B212D"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="1.5"
							/>
							<path
								d="M14.1213 9.87868C15.2929 11.0503 15.2929 12.9497 14.1213 14.1213C12.9497 15.2929 11.0502 15.2929 9.87868 14.1213C8.70711 12.9497 8.70711 11.0503 9.87868 9.87868C11.0502 8.70711 12.9497 8.70711 14.1213 9.87868Z"
								stroke="#1B212D"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="1.4286"
							/>
						</svg>
					</button>
				</div>
			</div>
			<p class="mb-16 text-xs font-semibold">{{ t('login.forgot_password') }}</p>

			<button
				class="bg-dark-sanJuan inline-flex h-12 w-full items-center justify-center rounded-md text-white"
				:class="{ 'cursor-not-allowed': hasInputFilledIn }"
				:disabled="hasInputFilledIn"
				@click="handleSubmit"
			>
				<span>{{ t('login.continue') }}</span>
				<svg
					class="ml-2.5 mt-1"
					fill="none"
					height="10"
					viewBox="0 0 6 10"
					width="8"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M1 9L5 5L1 1"
						stroke="white"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="1.5"
					/>
				</svg>
			</button>
		</form>
	</div>
</template>
