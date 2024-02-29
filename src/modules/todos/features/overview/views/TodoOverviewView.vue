<script setup lang="ts">
import { useI18n } from 'vue-i18n'

import AppIcon from '@/components/AppIcon.vue'
const { t } = useI18n()
</script>

<template>
	<h2>
		{{ t('shared.todos_title') }}
	</h2>
	<AppIcon icon="editIcon" />
</template>
