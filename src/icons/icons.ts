import type { Component } from 'vue'

export const icons = {
	editIcon: import('@/icons/EditIcon.vue'),
} satisfies Record<string, Component>

export type Icon = keyof typeof icons
