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

const postTodo = (setTodoList, newTodo) => {
  axios.post('http://localhost:8080/api/todos', newTodo)
    .then(response => {
      if(response.status === 201) {
        setTodoList(prevTodoList => [...prevTodoList, newTodo]);
      }
    })
    .catch(error => {
      console.error(error);
    });
}

const updateTodos = (setTodoList, updatedTodo) => {
  axios.put(`http://localhost:8080/api/todos/${updatedTodo.id}`, updatedTodo)
    .then(response => {
      if(response.status === 200) {
        setTodoList(t => t.map(t => t.id === updatedTodo.id ? updatedTodo : t));
      }
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
      id : todoList.length + 1,
      task : input,
      done : false
    }
    postTodo(setTodoList, newTodo);
  }

  const handleTodoClick = (index) => {
    const newTodoList = [...todoList]; 
    newTodoList[index].done = !newTodoList[index].done;
    updateTodos(setTodoList, newTodoList[index]);
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
