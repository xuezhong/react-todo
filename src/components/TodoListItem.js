import React from "react";
import style from './TodoListItem.module.css';
import PropTypes from 'prop-types';

function TodoListItem(props) {
    /*Object.keys(props).forEach((attribute) => {
        console.log(attribute + ':', props[attribute]);
      });*/
    const {todo, onRemoveTodo} = props;
    const handleRemove = () => {
        onRemoveTodo(todo.id);
      };
    return (
        <li key={todo.id} className={style.ListItem}>
        <span>{todo.title}</span>
        <button onClick={handleRemove}>Remove</button>
        </li>
    );
}

TodoListItem.prototypes = {
  todo: PropTypes.object.isRequired,
  onRemoveTodo: PropTypes.func.isRequired
}
export default TodoListItem;