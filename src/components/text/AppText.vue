<script setup lang="ts">
const props = withDefaults(
	defineProps<{
		text: string
	}>(),
	{
		text: 'test',
	}
)
</script>

<template>
	<h2>{{ props.text }}</h2>
</template>
