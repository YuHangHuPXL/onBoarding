<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

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
