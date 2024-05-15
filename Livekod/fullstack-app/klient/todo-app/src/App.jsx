import TodoList from "./components/TodoList";
import AddForm from "./components/AddForm";
import { useState, useEffect } from 'react';
import axios from 'axios';
import ClearGroup from "./components/ClearGroup";

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

const deleteTodos = (setTodoList) => {
  axios.delete('http://localhost:8080/api/todos')
    .then(response => {
      if(response.status === 200) {
        setTodoList([]);
      }
    })
    .catch(error => {
      console.error(error);
    });
}

const deleteTodo = (setTodoList, deleteId) => {
  axios.delete(`http://localhost:8080/api/todos/${deleteId}`)
    .then(response => {
      if(response.status === 200) {
        setTodoList(prevTodoList => prevTodoList.filter(todo => todo.id !== parseInt(deleteId)));
      }
    })
    .catch(error => {
      console.error(error);
    });
}

function App() {
  const [todoList, setTodoList] = useState([]);
  const [input, setInput] = useState('');
  const [deleteId, setDeleteId] = useState(0);

  useEffect(() => {
    fetchTodos(setTodoList);
  }, []);

  const handleDeleteId =(event) => { 
    setDeleteId(event.target.value);
  }

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

  const handleDeleteTodo = () => {
    deleteTodo(setTodoList, deleteId);
  }

  const handleDeleteTodos = () => {
    deleteTodos(setTodoList);
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

      <ClearGroup
        todoList={todoList}
        handleDeleteId={handleDeleteId}
        handleDeleteTodo={handleDeleteTodo}
        handleDeleteTodos={handleDeleteTodos}
      />
    </section>
  )
}

export default App
