import httpClient from '@/http/httpClient'
import type { Todo } from '@/models/todo/todo.model'
import { todoSchema } from '@/models/todo/todo.model'

interface TodoService {
	getAll: () => Promise<Todo[]>
	checkTodo: (todoUuid: string) => Promise<Todo>
}

export const todoService: TodoService = {
	getAll: async (): Promise<Todo[]> => {
		const response = await httpClient.get('/v1/todos')

		if (response.data) {
			for (const todo of response.data) {
				todoSchema.parse(todo)
			}
		}

		return response.data
	},
	checkTodo: async (todoUuid: string): Promise<Todo> => {
		const response = await httpClient.post(`/v1/todos/${todoUuid}/check`)

		return response.data
	},
}
