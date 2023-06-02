import React from 'react';
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
function App() {
  return (
    <div>
    <h1>
      "Todo List"
    </h1>

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
    </div>

  );
}

export default App;
