import { useMutation, useQueryClient } from '@tanstack/vue-query'

import type { Todo } from '@/models/todo/todo.model'
import type { TodoUuid } from '@/models/todo/todoUuid.model'
import { todoService } from '@/modules/todos/api/services/todo.service'

export function useCheckTodoMutation() {
	const queryClient = useQueryClient()
	return useMutation<TodoUuid, Todo>({
		mutationKey: 'checkTodo',
		mutationFn: async (todoUuid: TodoUuid) => {
			return await todoService.checkTodo(todoUuid)
		},
		onSuccess: async () => {
			await queryClient.invalidateQueries({ queryKey: ['todos'] })
		},
	})
}
