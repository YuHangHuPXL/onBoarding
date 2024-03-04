<script setup lang="ts">
import { useI18n } from 'vue-i18n'

import ArrowRightIcon from '@/icons/ArrowRightIcon.vue'

const props = withDefaults(
	defineProps<{
		hasInputFilledIn: boolean
		hasRightArrow?: boolean
		buttonText: string
	}>(),
	{
		hasInputFilledIn: false,
		hasRightArrow: false,
	}
)
const emit = defineEmits<{
	submit: [void]
}>()

function handleSubmit(): void {
	emit('submit')
}

const { t } = useI18n()
</script>

<template>
	<button
		class="inline-flex h-12 w-full items-center justify-center rounded-md text-white"
		:class="{ 'cursor-not-allowed': hasInputFilledIn }"
		:disabled="hasInputFilledIn"
		@click="handleSubmit"
	>
		<span>{{ props.buttonText }}</span>
		<ArrowRightIcon v-if="hasRightArrow" />
	</button>
</template>
