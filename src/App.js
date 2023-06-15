import React from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';

function App() {
  const [newTodo, setNewTodo] =  React.useState();
  function printState() {
    console.log(newTodo);
  }
  return (
    <div>
    <h1>
      "Todo List"
    </h1>
    <AddTodoForm onAddTodo={setNewTodo} printState={printState}></AddTodoForm>
    <p>{newTodo}</p>
    <TodoList/>
    </div>
  );
}

export default App;
