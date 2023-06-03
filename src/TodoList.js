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
            function(item) {
              return <li>
                <span>{item.id}</span>
                <span>{item.title}</span>
                </li>
            }
          )
        }
      </ul>
    );
}

export default TodoList;