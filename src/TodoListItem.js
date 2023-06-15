import React from "react";
function TodoListItem(props) {
    /*Object.keys(props).forEach((attribute) => {
        console.log(attribute + ':', props[attribute]);
      });*/
    const {todo} = props;
    return (
        <li>
        <span>{todo.id}</span>
        <span>{todo.title}</span>
        </li>
    );
}
export default TodoListItem;