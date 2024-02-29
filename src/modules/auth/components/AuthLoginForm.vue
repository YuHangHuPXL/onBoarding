<script setup lang="ts">
import { useForm } from 'formango'
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'

import AppButton from '@/components/button/AppButton.vue'
import AppInput from '@/components/input/AppTextInput.vue'
import EyeIcon from '@/icons/EyeIcon.vue'
import { type AuthLoginInput, authLoginSchema } from '@/models/auth/authLoginForm.model'

const { t } = useI18n()

const { form, onSubmitForm } = useForm({ schema: authLoginSchema })

const emit = defineEmits<{
	submit: [value: AuthLoginInput]
}>()

const passwordFieldType = ref<string>('password')

const username = form.register('username', '')

const password = form.register('password', '')

const disableButton = computed<boolean>(() => {
	return !(username.isValid && username.isDirty) || !(password.isValid && password.isDirty)
})

function showPassword(): void {
	passwordFieldType.value = 'text'
}

function hidePassword(): void {
	passwordFieldType.value = 'password'
}

onSubmitForm((values) => {
	emit('submit', values)
})
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
					v-bind="username"
					input-type="text"
					:is-dirty="username.isDirty"
					:is-valid="username.isValid"
					:placeholder="t('login.input_placeholder')"
				/>
			</div>
			<div class="mb-1 grid">
				<label
					class="text-xs font-semibold"
					for="password-input"
					>{{ t('login.password_label') }}</label
				>
				<div class="relative">
					<AppInput
						v-bind="password"
						:input-type="passwordFieldType"
						:is-dirty="password.isDirty"
						:is-valid="password.isValid"
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
				:has-input-filled-in="disableButton"
				:has-right-arrow="true"
				@submit="form.submit"
			/>
		</form>
	</div>
</template>
