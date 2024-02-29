import httpClient from '@/http/httpClient'
import { todoSchema } from '@/models/todo/todo.model'
import type { Todo } from '@/plugins/i18n/i18n'

interface TodoService {
	getAll: () => Promise<Todo[]>
}

export const todoService: TodoService = {
	getAll: async (): Promise<Todo[]> => {
		const response = await httpClient.get('/v1/todos')

		if (response.items) {
			for (const todo of response.items) {
				todoSchema.parse(todo)
			}
		}

		return response.items
	},
}
