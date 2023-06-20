import TodoListItem from './TodoListItem';

function TodoList(props) {
    const {todoList, onRemoveTodo} = props;
    return (
      <nav>
        <ul>
        {
          todoList.map(
            (item) => {
              return <TodoListItem key={item.id} todo={item} onRemoveTodo={onRemoveTodo}></TodoListItem>
            }
          )
        }
      </ul>
      </nav>
    );
}

export default TodoList;