import React from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';

import { useEffect, useState } from 'react';

function DataLoadingComponent() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // 在组件渲染后开始异步加载数据
    fetchData()
      .then((result) => {
        // 数据加载完成后更新状态
        setData(result);
      })
      .catch((error) => {
        console.error('Error loading data:', error);
      });
  }, []);

  return (
    <div>
      {data ? (
        // 数据加载完成后渲染数据
        <DataDisplayComponent data={data} />
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
}

function DataDisplayComponent({ data }) {
  // 根据接收到的数据渲染组件
  return <div>{/* 渲染数据 */}</div>;
}

// 异步加载数据的函数示例
function fetchData() {
  const f = (resolve) => {
    setTimeout(() => {
      const data = 'Example data';
      resolve(data);
    }, 2000);
  };
  return new Promise(f);
}
function useSemiPersistentState()
{
  const [todoList, setTodoList] = React.useState(JSON.parse(localStorage.getItem('savedTodoList')));

  useEffect(()=>{
    // To store data in local storage
    console.log(JSON.stringify(todoList));
    localStorage.setItem('savedTodoList', JSON.stringify(todoList));
  }, [todoList]);
  return [todoList, setTodoList];
}

function App() {
  const [todoList, setTodoList] = useSemiPersistentState();
  function addTodo(newTodo) {
    const newTodoList = [...todoList, newTodo]
    setTodoList(newTodoList);
    console.log(newTodoList)
  }
  return (
    <>
    <h1>
      Todo List
    </h1>
    <AddTodoForm onAddTodo={addTodo}></AddTodoForm>
    <TodoList todoList={todoList}/>
    <DataLoadingComponent/>
    </>
  );
}

export default App;
