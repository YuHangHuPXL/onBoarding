<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<template>
	<h2>
		{{ t('shared.todos_title') }}
	</h2>
</template>
