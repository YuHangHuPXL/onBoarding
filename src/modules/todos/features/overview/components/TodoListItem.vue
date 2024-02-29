<script setup lang="ts">
import AppDateText from '@/components/text/AppDateText.vue'
import AppText from '@/components/text/AppText.vue'
import AppTitle from '@/components/title/AppTitle.vue'
import type { Todo } from '@/plugins/i18n/i18n'

const props = defineProps<{
	todo: Todo
}>()
</script>

<template>
	<input type="checkbox" />
	<button>open menu</button>
	<AppTitle :title-text="props.todo.title" />
	<AppText :text="props.todo.description" />
	<AppDateText :date="props.todo.deadline" />
</template>
