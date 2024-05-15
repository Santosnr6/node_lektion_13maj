function AddForm({ handleNewTodo, handleInput }) {
  return (
    <form onSubmit={ handleNewTodo }>
        <input onChange={ handleInput } type="text" placeholder="Type new todo..."/>
        <input type="submit" value="Add Todo"/>
    </form>
  )
}

export default AddForm;
