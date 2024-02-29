import { useQuery } from '@tanstack/vue-query'

import { todoService } from '@/modules/todos/api/services/todo.service'

export function useTodoIndexQuery() {
	return useQuery({
		queryKey: ['todos'],
		queryFn: async () => {
			return await todoService.getAll()
		},
	})
}
