<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(
	defineProps<{
		titleText: string
		fontSize?: string
	}>(),
	{
		titleText: 'Welcome!',
		fontSize: '20px',
	}
)

const calculatedFontSize = computed<string>(() => {
	return `text-[${props.fontSize}]`
})
</script>

<template>
	<h1 :class="['font-bold', calculatedFontSize]">
		{{ props.titleText }}
	</h1>
</template>
