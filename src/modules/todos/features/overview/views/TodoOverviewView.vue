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
	try {
		await checkTodoMutation.mutateAsync(todoUuid)
	} catch (error) {
		console.log(error)
	}
}
</script>

<template>
	<AppTitle :title-text="t('shared.todos_title')" />
	<TodoList
		:is-loading="isLoading"
		:todos="todos"
		@check-todo="onCheckTodo"
	/>
</template>
