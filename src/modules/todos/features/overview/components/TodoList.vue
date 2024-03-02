<script setup lang="ts">
import type { Todo } from '@/models/todo/todo.model'
import type { TodoUuid } from '@/models/todo/todoUuid.model'
import TodoListItem from '@/modules/todos/features/overview/components/TodoListItem.vue'

const emits = defineEmits<{
	checkTodo: [todoUuid: TodoUuid]
}>()

const props = defineProps<{
	todos: Todo[] | null
	isLoading: boolean
}>()

function onCheckTodo(todo: Todo): void {
	const todoUuiObject: TodoUuid = { todoUuid: todo.uuid }
	emits('checkTodo', todoUuiObject)
}
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
						<TodoListItem
							:todo="todo"
							@check-todo="onCheckTodo"
						/>
					</li>
				</ul>
			</div>
			<p v-else>All done for today!</p>
			<p v-if="props.isLoading">Loading...</p>
		</div>
	</div>
</template>
