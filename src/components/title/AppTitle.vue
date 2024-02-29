<script setup lang="ts">
withDefaults(
	defineProps<{
		titleText: string
	}>(),
	{
		titleText: 'Welcome!',
	}
)
</script>

<template>
	<h2 class="text-3xl font-bold">{{ titleText }}</h2>
</template>
