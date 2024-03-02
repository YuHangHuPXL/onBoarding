import httpClient from '@/http/httpClient'
import type { Todo } from '@/models/todo/todo.model'
import { todoSchema } from '@/models/todo/todo.model'
import type { TodoUuid } from '@/models/todo/todoUuid.model'

interface TodoService {
	getAll: () => Promise<Todo[]>
	checkTodo: (todoUuid: TodoUuid) => Promise<Todo>
}

export const todoService: TodoService = {
	getAll: async (): Promise<Todo[]> => {
		const response = await httpClient.get('/v1/todos')

		if (response.data) {
			for (const todo of response.data) {
				todoSchema.parse(todo)
			}
		}

		return response.data.filter((todo: Todo) => !todo.completed)
	},
	checkTodo: async (todoUuid: TodoUuid): Promise<Todo> => {
		const response = await httpClient.post(`/v1/todos/${todoUuid.todoUuid}/check`)

		return response.data
	},
}
