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
	<p class="text-[14px]">{{ props.text }}</p>
</template>
