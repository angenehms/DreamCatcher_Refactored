import React from 'react'
import TodoEditDeleteFormTag from '../TodoEditDeleteFormTag/TodoEditDeleteFormTag'

const TodoEditDeleteForm = ({todoContents}) => {
  return (

    <ul>

      {todoContents.map((whatTodo, index) => { 
        // console.log(whatTodo);
        return <TodoEditDeleteFormTag key={index} whatTodo={whatTodo}/>
      })}
      
    </ul>

  )
}

export default TodoEditDeleteForm
