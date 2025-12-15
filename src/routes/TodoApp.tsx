import {useTodos} from "../hooks/useTodos.ts";
import Sidebar from "../components/sidebar.tsx";

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
        <Sidebar>
            <p className="text-3xl">To-Do</p>
        </Sidebar>
    )
}

function SingleTodo() {

}