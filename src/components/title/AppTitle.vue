<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(
	defineProps<{
		titleText: string
		fontSize: string
	}>(),
	{
		titleText: 'Welcome!',
		fontSize: '16',
	}
)

const fontSizeClass = computed<string>(() => {
	return `text-[${props.fontSize}px]`
})
</script>

<template>
	<h1 :class="[fontSizeClass, 'font-bold']">
		{{ props.titleText }}
	</h1>
</template>
