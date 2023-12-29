import { useState } from "react";

const NewTodoForm = ({addTodo }) => {
    const INTIAL_STATE = {
        todo: '',
    }

    const [formData, setFormData] = useState(INTIAL_STATE)

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData(data => ({
            ...data,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo({...formData})
        setFormData(INTIAL_STATE)
    }

    return (
      <form onSubmit={handleSubmit}>
        <label htmlFor="todo">ToDo: </label>
        <input
          type="text"
          id="todo"
          name="todo"
          value={formData.todo}
          onChange={handleChange}
        />

        <button>Add Item</button>
      </form>
    );
}

export default NewTodoForm;