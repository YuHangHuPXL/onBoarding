<script setup lang="ts">
import { computed } from 'vue'

import AppDateText from '@/components/text/AppDateText.vue'
import AppText from '@/components/text/AppText.vue'
import AppTitle from '@/components/title/AppTitle.vue'
import type { Todo } from '@/models/todo/todo.model'
import TodoMenu from '@/modules/todos/features/overview/components/TodoMenu.vue'
import { isDateAfterToday } from '@/utils/dates.util'

const props = defineProps<{
	todo: Todo
}>()

const hasExceededDeadline = computed<boolean>(() => {
	return isDateAfterToday(new Date(props.todo.deadline))
})
</script>

<template>
	<div class="my-1.5 flex items-start gap-3 rounded-[20px] border bg-light-catskillWhite p-[10px]">
		<input
			class="form-checkbox h-5 w-5 shrink-0 rounded-[4px] border-gray-300 bg-transparent text-dark-sanJuan focus:ring-0 focus:ring-offset-0"
			type="checkbox"
		/>
		<div class="grow">
			<AppTitle
				class="leading-none"
				:title-text="props.todo.title"
			/>
			<AppText
				class="text-dark-shadowBlue"
				:text="props.todo.description"
			/>
			<AppDateText
				class="text-dark-shadowBlue"
				:class="{ 'text-red-500': hasExceededDeadline }"
				:date="props.todo.deadline"
			/>
		</div>
		<div>
			<TodoMenu />
		</div>
	</div>
</template>
