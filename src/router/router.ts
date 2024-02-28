import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'

import { useAuthStore } from '@/modules/auth/stores/auth.store'

const routes: RouteRecordRaw[] = [
	{
		path: '/login',
		name: 'login',
		component: async () => import('@/modules/auth/views/AuthLoginView.vue'),
	},
	{
		path: '/',
		name: 'index',
		meta: { requiresAuth: true },
		redirect: '/todos',
		children: [
			{
				path: 'todos',
				name: 'todos',
				component: async () => import('@/modules/todo/views/TodoOverviewView.vue'),
			},
		],
	},
	{
		name: 'error',
		path: '/:pathMatch(.*)*',
		component: async () => import('@/modules/auth/views/ErrorNotFoundView.vue'),
	},
]

export const router = createRouter({
	history: createWebHistory(),
	routes: routes,
})

router.beforeEach(async (to) => {
	const authStore = useAuthStore()

	if (to.meta.requiresAuth && !authStore.isAuthenticated) {
		return '/login'
	}

	return true
})
