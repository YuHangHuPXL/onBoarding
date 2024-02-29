<script setup lang="ts">
import { ref, watch } from 'vue'

withDefaults(
	defineProps<{
		placeholder: string
		inputType: string
		isValid: boolean
		isDirty: boolean
	}>(),
	{
		placeholder: 'shared.app_text_placeholder',
		inputType: 'text',
		isValid: false,
		isDirt: false,
	}
)

const emits = defineEmits<{
	update: [value: string]
}>()

const input = ref<string>('')
const isFocussed = ref<boolean>(false)

watch(input, (newValue) => {
	emits('update', newValue)
})

function toggleHasBlurred(): void {
	isFocussed.value = !isFocussed.value
}
</script>

<template>
	<input
		v-model="input"
		class="h-12 w-full rounded-lg bg-light-periWinkel p-3"
		:class="{ 'border border-red-500 outline-none': !isValid && isDirty && !isFocussed }"
		:placeholder="placeholder"
		:type="inputType"
		@focusin="toggleHasBlurred"
		@focusout="toggleHasBlurred"
	/>
</template>
