<script setup>
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { useI18n } from 'vue-i18n'

import DotOptionsButton from '@/components/button/DotOptionsButton.vue'
import TodoMenuItem from '@/modules/todos/features/overview/components/TodoMenuItem.vue'

const { t } = useI18n()
</script>

<template>
	<Menu>
		<div class="relative">
			<MenuButton>
				<DotOptionsButton />
			</MenuButton>
			<div class="absolute -bottom-[63px] right-1 mb-0.5 w-32">
				<MenuItems class="grid grid-cols-1 rounded-[10px] bg-white">
					<MenuItem v-slot="{ active }">
						<TodoMenuItem
							class="border-b-[1px] border-b-light-solitude"
							icon="editIcon"
							:menu-text="t('todo.menu.edit_text')"
						/>
					</MenuItem>
					<MenuItem v-slot="{ active }">
						<TodoMenuItem
							class="text-red-500"
							icon="trashBin"
							:menu-text="t('todo.menu.remove_text')"
						/>
					</MenuItem>
				</MenuItems>
			</div>
		</div>
	</Menu>
</template>
