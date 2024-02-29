<script setup lang="ts">
import { useI18n } from 'vue-i18n'

import AppTitle from '@/components/title/AppTitle.vue'
import { useTodoIndexQuery } from '@/modules/todos/api/queries/todoIndex.query'
import TodoList from '@/modules/todos/features/overview/components/TodoList.vue'
const { t } = useI18n()

const { data: todos, isLoading } = useTodoIndexQuery()
</script>

<template>
	<AppTitle :title-text="t('shared.todos_title')" />
	<TodoList
		:is-loading="isLoading"
		:todos="todos"
	/>
</template>
