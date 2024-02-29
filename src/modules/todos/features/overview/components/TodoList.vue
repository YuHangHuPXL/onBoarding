<script setup lang="ts">
import type { Todo } from '@/models/todo/todo.model'
import TodoListItem from '@/modules/todos/features/overview/components/TodoListItem.vue'

const props = defineProps<{
	todos: Todo[] | null
	isLoading: boolean
}>()
</script>

<template>
	<div class="w-[500px]">
		<div v-if="props.todos">
			<div v-if="props.todos.length > 0">
				<ul>
					<li
						v-for="todo in props.todos"
						:key="todo.uuid"
					>
						<TodoListItem :todo="todo" />
					</li>
				</ul>
			</div>
			<p v-else>No todo's found</p>
			<p v-if="props.isLoading">Loading...</p>
		</div>
	</div>
</template>
