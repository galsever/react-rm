import {useMutation, useQuery} from "@tanstack/react-query";
import {useAxios} from "./useAxios.ts";
import type {Todo, TodoCreateRequest} from "../lib/definitions.ts";
import {queryClient} from "../main.tsx";

export function useTodos() {

    const api = useAxios()

    const todosQuery = useQuery({
        queryKey: ["todos"],
        queryFn: async () => {
            const response = await api.get("/todos")
            return response.data
        }
    })

    const addTodo = useMutation<Todo, Error, TodoCreateRequest>({
        mutationFn: async (newTodo: TodoCreateRequest) => {
            const response = await api.post<Todo>("/todo", newTodo)
            return response.data
        },
        onSuccess: async () => {
            await queryClient.invalidateQueries({ queryKey: ["todos"] })
        }
    })

    const deleteTodo = useMutation({
        mutationFn: async (id: string) => {
            return await api.delete(`/todo/${id}`)
        },
        onSuccess: async () => {
            await queryClient.invalidateQueries({ queryKey: ["todos"] })
        }
    })

    return {
        todos: todosQuery.data,
        isLoading: todosQuery.isLoading,
        isError: todosQuery.isError,

        addTodo,
        deleteTodo
    }
}