import TodoListItem from './TodoListItem';

function TodoList(props) {
    const {todoList, onRemoveTodo} = props;
    return (
        <ul>
        {
          todoList.map(
            (item) => {
              return <TodoListItem key={item.id} todo={item} onRemoveTodo={onRemoveTodo}></TodoListItem>
            }
          )
        }
      </ul>
    );
}

export default TodoList;