import React from "react";
function AddTodoForm(props) {
  function handleAddTodo(event){
    event.preventDefault();

    // Retrieve the value of the title attribute from the event target
    const formData = new FormData(event.target);
    const todoTitle = formData.get('title');
    console.log('todoTitle:', todoTitle);

    const form = document.getElementById('addTodoForm');
    form.reset();
    props.printState();
    props.onAddTodo(todoTitle);
    props.printState();
  }
  return(
    <form onSubmit={handleAddTodo} id='addTodoForm'>
        <label htmlFor='todoTitle'>Title</label>
        <input id="todoTitle" name='title' ></input>
        <button>Add</button>
    </form>
  );
}
export default AddTodoForm;