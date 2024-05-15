function ClearGroup({todoList, handleDeleteId, handleDeleteTodo, handleDeleteTodos}) {
  return (
    <div className="clear-group">
        <input onChange={handleDeleteId} type="number" min="1" max={todoList.length}  />
        <button onClick={handleDeleteTodo}>Delete</button>
        <button onClick={handleDeleteTodos}>Clear</button>
    </div>
  )
}

export default ClearGroup
