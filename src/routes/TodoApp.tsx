import {useTodos} from "../hooks/useTodos.ts";

export default function TodoApp() {

    const { isLoading, todos, addTodo } = useTodos()

    if (isLoading) return <p></p>

    const handleClick = () => {
        addTodo.mutate({
            title: "Test Todo",
            date: null
        }, {

        })
    }

    return (
        <p className="text-3xl">To-Do</p>
    )
}

function SingleTodo() {

}