import React, { useEffect, useState } from 'react'
import { axiosAuthAPI } from '../api/Client'
import TodoAddForm from '../component/TodoAddForm/TodoAddForm'
import TodoEditDeleteForm from '../component/TodoEditDeleteForm/TodoEditDeleteForm'
import TodoSubmitCancelForm from '../component/TodoSubmitCancelForm/TodoSubmitCancelForm'

const Todo = () => {

  const [todoContents, setTodoContents] = useState([]);

  const readTodoFunction = async () => {
    const res = await axiosAuthAPI.get("/todos");
    const lists = res.data.map(list => list.todo);
    // console.log(res);
    // console.log(lists);
    setTodoContents(lists);
    // console.log(todoContents);
  }

  useEffect(() => {readTodoFunction()}, []);
  
  return (
    <>
      <h1>Todo List</h1>
      <TodoAddForm/>
      <TodoEditDeleteForm todoContents={todoContents}/>
      <TodoSubmitCancelForm/>
    </>
  )
}

export default Todo
