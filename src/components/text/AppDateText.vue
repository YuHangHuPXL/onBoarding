<script setup lang="ts">
import { computed } from 'vue'

import AppText from '@/components/text/AppText.vue'
import CalendarIcon from '@/icons/CalendarIcon.vue'
import { formatDate } from '@/utils/dates.util'

const props = defineProps<{
	date: string
}>()

const formatedDate = computed<string>(() => {
	return formatDate(props.date)
})
</script>

<template>
	<div class="flex items-center gap-1">
		<CalendarIcon />
		<AppText :text="formatedDate" />
	</div>
</template>
