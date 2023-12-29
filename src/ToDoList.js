import { useState } from "react";
import { v4 as uuid } from "uuid";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";

const ToDoList = () => {
    const INITIAL_STATE = []
    const [todos, setTodos] = useState(INITIAL_STATE)

    const addTodo = ( newTodo ) => {
        setTodos(todos => [...todos, { ...newTodo, id: uuid() }])
    }

    const handleDelete = (id) => {
        const updatedTodos = todos.filter(todo => todo.id !== id);
        setTodos(updatedTodos)
    }

    return(
        <>
            <h1>ToDo List</h1>
            <NewTodoForm addTodo={addTodo} />
            <div>
                {todos.map(({ id, todo }) => 
                    <Todo 
                        key={id} 
                        id={id} 
                        todo={todo} 
                        onDelete={handleDelete}
                    />
                )}
            </div>
        </>
    )
}

export default ToDoList;