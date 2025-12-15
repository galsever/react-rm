export interface Todo {
    id: string,
    userId: string,
    title: string,
    date: string | null,
    completed: boolean,
}

export interface TodoCreateRequest {
    title: string,
    date: string | null,
}