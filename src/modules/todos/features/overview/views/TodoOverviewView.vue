<script setup lang="ts">
import { useI18n } from 'vue-i18n'

import AppTitle from '@/components/title/AppTitle.vue'
import type { TodoUuid } from '@/models/todo/todoUuid.model'
import { useCheckTodoMutation } from '@/modules/todos/api/mutations/checkTodo.mutation'
import { useTodoIndexQuery } from '@/modules/todos/api/queries/todoIndex.query'
import TodoList from '@/modules/todos/features/overview/components/TodoList.vue'
const { t } = useI18n()
const checkTodoMutation = useCheckTodoMutation()

const { data: todos, isLoading } = useTodoIndexQuery()

async function onCheckTodo(todoUuid: TodoUuid): void {
	await checkTodoMutation.mutateAsync(todoUuid)
}
</script>

<template>
	<div class="mt-8 grid-cols-1">
		<AppTitle
			class="text-center"
			:title-text="t('shared.todos_title')"
		/>
		<TodoList
			class="mx-auto"
			:is-loading="isLoading"
			:todos="todos"
			@check-todo="onCheckTodo"
		/>
	</div>
</template>
