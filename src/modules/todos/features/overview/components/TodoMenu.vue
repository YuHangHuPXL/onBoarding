<script setup lang="ts">
import TodoMenuItem from '@/modules/todos/features/overview/components/TodoMenuItem.vue'
import type { MenuItem } from '@/modules/todos/features/overview/models/todoMenuItem.model'

const props = defineProps<{
	items: MenuItem[]
}>()
</script>

<template>
	<div
		v-for="menuItem in props.items"
		:key="menuItem.menuText"
	>
		{
		<TodoMenuItem
			:icon="menuItem.icon"
			:menu-text="menuItem.menuText"
		/>
	</div>
</template>
