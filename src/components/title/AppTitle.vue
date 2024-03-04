<script setup lang="ts">
const props = withDefaults(
	defineProps<{
		titleText: string
	}>(),
	{
		titleText: 'Welcome!',
	}
)
</script>

<template>
	<h2 class="text-3xl font-bold">{{ props.titleText }}</h2>
</template>
