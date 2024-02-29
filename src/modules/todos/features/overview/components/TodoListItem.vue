<script setup lang="ts">
import { useI18n } from 'vue-i18n'

import DotOptionsButton from '@/components/button/DotOptionsButton.vue'
import AppDateText from '@/components/text/AppDateText.vue'
import AppText from '@/components/text/AppText.vue'
import AppTitle from '@/components/title/AppTitle.vue'
import type { Todo } from '@/models/todo/todo.model'
import type { MenuItem } from '@/modules/todos/features/overview/models/todoMenuItem.model'
const { t } = useI18n()

const props = defineProps<{
	todo: Todo
}>()

const todoMenuItems: MenuItem[] = [
	{
		icon: 'editIcon',
		menuText: t('todo.menu.edit_text'),
	},
	{
		icon: 'trashBin',
		menuText: t('todo.menu.remove_text'),
	},
]
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
				:class="'text-dark-shadowBlue'"
				:date="props.todo.deadline"
			/>
		</div>
		<DotOptionsButton class="pt-1.5" />
	</div>
</template>
