import React from 'react'
import TodoAddForm from '../component/TodoAddForm/TodoAddForm'
import TodoEditDeleteForm from '../component/TodoEditDeleteForm/TodoEditDeleteForm'
import TodoSubmitCancelForm from '../component/TodoSubmitCancelForm/TodoSubmitCancelForm'

const Todo = () => {
  return (
    <>
      <h1>Todo List</h1>
      <TodoAddForm/>
      <TodoEditDeleteForm/>
      <TodoSubmitCancelForm/>
    </>
  )
}

export default Todo
