import React from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';

import { useEffect, useState } from 'react';

function App() {
  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    const options = {method:'GET', headers:{Authorization:`Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`}};
    const url = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/${process.env.REACT_APP_TABLE_NAME}`;
    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        const message = `Error has ocurred: ${response.status}`;
        throw new Error(message);
      } else {
        const data = await response.json();
        console.log(data);
        return data;
      }
    } catch(error) {
      console.log(error.message);
      return [];
    }
  };

  const postTodo = async (todoTitle) => {
    try {
      const airtableData = {
        fields: {
          title: todoTitle,
        },
      };
  
      const response = await fetch(
        `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/Default`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
          },
          body: JSON.stringify(airtableData),
        }
      );
  
      if (!response.ok) {
        const message = `Error has ocurred:
                               ${response.status}`;
        throw new Error(message);
      }
  
      const dataResponse = await response.json();
      return dataResponse;
    } catch (error) {
      console.log(error.message);
      return null;
    }
  };

  useEffect(()=>{
    fetchData().then((data) => {
    const todos = data.records.map((item)=>{
      return {id:item.id, title:item.fields.title};
    })
    setTodoList(todos);
    console.log('0 ' + todos);
    setIsLoading(false);
   });
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
    <AddTodoForm onAddTodo={addTodo} postTodo={postTodo}></AddTodoForm>
    {
      isLoading ? <p>Loading</p> : 
      <TodoList todoList={todoList} onRemoveTodo={removeTodo}/>
    }
    </>
  );
}

export default App;
