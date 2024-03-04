<script setup lang="ts">
import { Dialog, DialogDescription, DialogPanel, DialogTitle } from '@headlessui/vue'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
const emits = defineEmits<{
	close: [false: boolean]
}>()

const props = withDefaults(
	defineProps<{
		modalValue?: boolean
	}>(),
	{
		modalValue: true,
	}
)

function closeModal(): void {
	emits('close', false)
}
</script>

<template>
	<Dialog :open="props.modalValue">
		<DialogPanel>
			<DialogTitle>test</DialogTitle>
			<DialogDescription />

			<button @click="closeModal()">Cancel</button>
		</DialogPanel>
	</Dialog>
</template>
