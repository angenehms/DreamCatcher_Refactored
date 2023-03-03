import React, { useEffect, useState } from 'react'
import { sendForReadTodoFunction } from '../api/Auth'
import TodoAddForm from '../component/TodoAddForm/TodoAddForm'
import TodoEditDeleteForm from '../component/TodoEditDeleteForm/TodoEditDeleteForm'

const Todo = () => {

  const [todoListInfo, setTodoListInfo] = useState([]);

  const readTodoFunction = async () => {
    const res = await sendForReadTodoFunction();
    //console.log('확인',res)
    const listInfo = res.data;
    // console.log(listInfo);
    setTodoListInfo(listInfo);
  }

  useEffect(() => {readTodoFunction()}, []);
  

  return (
    <>
      <h1>Todo List</h1>
      <TodoAddForm readTodoFunction={readTodoFunction}/>
      <TodoEditDeleteForm readTodoFunction={readTodoFunction} todoListInfo={todoListInfo}/>
    </>
  )
}

export default Todo
