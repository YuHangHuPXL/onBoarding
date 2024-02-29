<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

withDefaults(
	defineProps<{
		text: string
	}>(),
	{
		text: 'test',
	}
)
</script>

<template>
	<h2>{{ text }}</h2>
</template>
