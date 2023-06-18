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
  return <div>{data/* 渲染数据 */}</div>;
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

function App() {
  const [todoList, setTodoList] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  useEffect(()=>{
    new Promise((resolve, reject) => {
      setTimeout(() => {
        const todoList = localStorage.getItem('savedTodoList')
        resolve({data:{todoList:JSON.parse(todoList)}});
      }, 2000)
    }).then((result) => {
      setTodoList(result.data.todoList);
      console.log('0 ' + result.data.todoList);
      setIsLoading(false);
    })
  }, []);

  useEffect(()=>{
    if (! isLoading) {
      // To store data in local storage
      console.log(JSON.stringify(todoList));
      localStorage.setItem('savedTodoList', JSON.stringify(todoList));
    }
  }, [todoList, isLoading]);
  function removeTodo(id) {
    const newTodoList = todoList.filter((item)=>{
      if (item.id === id){
        return false;
      }
      return true;
    });
    setTodoList(newTodoList);
    console.log('1 ' + newTodoList);
  }
  function addTodo(newTodo) {
    const newTodoList = [...todoList, newTodo]
    setTodoList(newTodoList);
    console.log('2 ' + newTodoList);
  }

  return (
    <>
    <h1>
      Todo List
    </h1>
    <AddTodoForm onAddTodo={addTodo}></AddTodoForm>
    {
      isLoading ? <p>Loading</p> : 
      <TodoList todoList={todoList} onRemoveTodo={removeTodo}/>
    }
    
    <DataLoadingComponent/>
    </>
  );
}

export default App;
