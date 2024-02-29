<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(
	defineProps<{
		text: string
		fontSize: string
	}>(),
	{
		text: 'test',
		fontSize: '14',
	}
)

const fontSizeClass = computed<string>(() => {
	return `text-[${props.fontSize}px]`
})
</script>

<template>
	<p :class="[fontSizeClass]">{{ props.text }}</p>
</template>
