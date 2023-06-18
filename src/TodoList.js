import TodoListItem from './TodoListItem';

function TodoList(props) {
    const {todoList} = props;
    return (
        <ul>
        {
          todoList.map(
            (item) => {
              return <TodoListItem key={item.id} todo={item}></TodoListItem>
            }
          )
        }
      </ul>
    );
}

export default TodoList;