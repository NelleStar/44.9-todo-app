const Todo = ({ id, todo, onDelete}) => {
    const handleDelete = () => {
      onDelete(id);
    };
   
    return (
      <ul>
        <li>
          {todo}
          <button onClick={handleDelete}>X</button>
        </li>
      </ul>
    );
}

export default Todo;