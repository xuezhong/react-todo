import React from "react";
function AddTodoForm(props) {
  const {onAddTodo} = props;
  const [todoTitle, setTodoTitle] = React.useState(null);
  function handleTitleChange(event) {
      const newTodoTitle = event.target.value;
      setTodoTitle(newTodoTitle);
  }
  function handleAddTodo(event) {
    event.preventDefault();

    
    onAddTodo({id:Date.now(), title:todoTitle});
    setTodoTitle('');
  }
  return(
    <form onSubmit={handleAddTodo} id='addTodoForm'>
        <label htmlFor='todoTitle'>Title</label>
        <input id="todoTitle" name='title' value={todoTitle} onChange={handleTitleChange}></input>
        <button>Add</button>
    </form>
  );
}
export default AddTodoForm;