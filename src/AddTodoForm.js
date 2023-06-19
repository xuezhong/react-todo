import React from "react";
import InputWithLabel from "./InputWithLabel";

function AddTodoForm(props) {
  const {onAddTodo, postTodo} = props;
  const [todoTitle, setTodoTitle] = React.useState(null);
  function handleTitleChange(event) {
      const newTodoTitle = event.target.value;
      setTodoTitle(newTodoTitle);
  }
  function handleAddTodo(event) {
    event.preventDefault();

    postTodo(todoTitle).then(data => {
      const todo = {id:data.id, title:data.fields.title};
      onAddTodo(todo);
      setTodoTitle('');
    });
  }
  return(
    <form onSubmit={handleAddTodo} id='addTodoForm'>
      <InputWithLabel todoTitle={todoTitle} handleTitleChange={handleTitleChange}>Title:</InputWithLabel>
      <button>Add</button>
    </form>
  );
}
export default AddTodoForm;