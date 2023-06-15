import TodoListItem from './TodoListItem';
const todoList = [
    {
      id:1,
      title:'complete assignment'
    },
    {
      id:2,
      title:'reading'
    },
    {
      id:3,
      title:'work out'
    }
  ];

function TodoList() {
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