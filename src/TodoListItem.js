import React from "react";
function TodoListItem(props) {
    /*Object.keys(props).forEach((attribute) => {
        console.log(attribute + ':', props[attribute]);
      });*/
    const {todo, onRemoveTodo} = props;
    const handleRemove = () => {
        onRemoveTodo(todo.id);
      };
    return (
        <li key={todo.id}>
        <span>{todo.title}</span>
        <button onClick={handleRemove}>Remove</button>
        </li>
    );
}
export default TodoListItem;