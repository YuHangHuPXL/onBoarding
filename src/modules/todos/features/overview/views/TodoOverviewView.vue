<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

import AddButton from '@/components/button/AddButton.vue'
import AppTitle from '@/components/title/AppTitle.vue'
import type { TodoUuid } from '@/models/todo/todoUuid.model'
import { useCheckTodoMutation } from '@/modules/todos/api/mutations/checkTodo.mutation'
import { useTodoIndexQuery } from '@/modules/todos/api/queries/todoIndex.query'
import AddTodoModal from '@/modules/todos/features/create/components/AddTodoModal.vue'
import TodoList from '@/modules/todos/features/overview/components/TodoList.vue'

const { t } = useI18n()
const checkTodoMutation = useCheckTodoMutation()

const { data: todos, isLoading } = useTodoIndexQuery()

const isModalOpen = ref<boolean>(false)

async function onCheckTodo(todoUuid: TodoUuid): void {
	await checkTodoMutation.mutateAsync(todoUuid)
}

function onClickAddButton(): void {
	isModalOpen.value = true
}

function onCloseModal(modalState: boolean): void {
	isModalOpen.value = modalState
}
</script>

<template>
	<div class="mt-8 grid-cols-1">
		<AppTitle
			class="text-center"
			font-size="200"
			:title-text="t('shared.todos_title')"
		/>
		<TodoList
			class="mx-auto"
			:is-loading="isLoading"
			:todos="todos"
			@check-todo="onCheckTodo"
		/>
	</div>
	<AddButton @click-add-button="onClickAddButton" />
	<AddTodoModal
		:modal-value="isModalOpen"
		@close="onCloseModal"
	/>
</template>
