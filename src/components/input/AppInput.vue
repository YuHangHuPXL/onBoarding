<script setup lang="ts">
import { ref, watch } from 'vue'

defineProps<{
	placeholder: string
	inputType: string
}>()
const emits = defineEmits<{
	update: [value: string]
}>()

const input = ref<string>('')

watch(input, (newValue) => {
	emits('update', newValue)
})
</script>

<template>
	<input
		v-model="input"
		class="invalid: h-12 w-full rounded-lg bg-light-periWinkel p-3"
		:placeholder="placeholder"
		:type="inputType"
	/>
</template>
