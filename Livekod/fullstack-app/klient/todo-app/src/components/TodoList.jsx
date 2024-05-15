
import TodoItem from './TodoItem';

function TodoList({ todoList, handleClick }) {
  return (
    <ul>
        {
            todoList.map((todo, index) => {
                return <TodoItem
                           todo={ todo }
                           key={ index }
                           index={ index }
                           handleClick={ handleClick } 
                       />
            })
        }
    </ul>
  )
}

export default TodoList;
