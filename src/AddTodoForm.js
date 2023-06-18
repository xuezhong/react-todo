import React from "react";
import InputWithLabel from "./InputWithLabel";

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
      <InputWithLabel todoTitle={todoTitle} handleTitleChange={handleTitleChange}>Title:</InputWithLabel>
      <button>Add</button>
    </form>
  );
}
export default AddTodoForm;