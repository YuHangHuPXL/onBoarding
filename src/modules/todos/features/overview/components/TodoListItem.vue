<script setup lang="ts">
import { computed } from 'vue'

import AppCheckboxInput from '@/components/input/AppCheckboxInput.vue'
import AppDateText from '@/components/text/AppDateText.vue'
import AppText from '@/components/text/AppText.vue'
import AppTitle from '@/components/title/AppTitle.vue'
import type { Todo } from '@/models/todo/todo.model'
import TodoItemMenu from '@/modules/todos/features/overview/components/TodoItemMenu.vue'
import { isDateAfterToday } from '@/utils/dates.util'

const emits = defineEmits<{
	checkTodo: [value: Todo]
}>()

const props = defineProps<{
	todo: Todo
}>()

const hasExceededDeadline = computed<boolean>(() => {
	return isDateAfterToday(new Date(props.todo.deadline))
})

function onChecked(): void {
	emits('checkTodo', props.todo)
}
</script>

<template>
	<div class="my-1.5 flex items-start gap-3 rounded-[20px] border bg-light-catskillWhite p-[10px]">
		<AppCheckboxInput @checked="onChecked" />
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
			<TodoItemMenu />
		</div>
	</div>
</template>
