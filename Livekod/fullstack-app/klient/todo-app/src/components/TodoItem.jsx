function TodoItem({ todo, index, handleClick }) {



  return (
    <li
        onClick={ () => handleClick(index) }
        style={ { backgroundColor: todo.done ? 'green' : 'red' } }
    >
        { todo.task }
    </li>
  )
}

export default TodoItem;
