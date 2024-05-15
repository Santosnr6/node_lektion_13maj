import TodoList from "./components/TodoList";
import AddForm from "./components/AddForm";
import { useState, useEffect } from 'react';
import axios from 'axios';

const fetchTodos = (setTodoList) => {
  axios.get('http://localhost:8080/api/todos')
    .then(response => {
      console.log(response.data);
      setTodoList(response.data);
    })
    .catch(error => {
      console.error(error);
    });
}

function App() {
  const [todoList, setTodoList] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    fetchTodos(setTodoList);
  }, []);

  const handleInput = (event) => {
    setInput(event.target.value);
  }

  const handleNewTodo = (event) => {
    event.preventDefault();
    const newTodo = {
      task : input,
      done : false
    }
    setTodoList(t => [...t, newTodo]);
  }

  const handleTodoClick = (index) => {
    const newTodoList = [...todoList]; 
    newTodoList[index].done = !newTodoList[index].done;
    setTodoList(newTodoList); 
  }

  return (
    <section className="app">
      <h1>My Todo App</h1>
      <AddForm 
        handleNewTodo={ handleNewTodo }
        handleInput={ handleInput }
      />
      <TodoList 
        todoList={ todoList } 
        handleClick={ handleTodoClick }
      />
    </section>
  )
}

export default App
