import type { Component } from 'vue'

export const icons = {
	editIcon: import('@/icons/EditIcon.vue'),
	trashBin: import('@/icons/TrashBinIcon.vue'),
	dotOptions: import('@/icons/DotOptionsIcon.vue'),
	emptySquare: import('@/icons/EmptySquareIcon.vue'),
	checkedSquare: import('@/icons/CheckedSquareIcon.vue'),
} satisfies Record<string, Component>

export type Icon = keyof typeof icons
