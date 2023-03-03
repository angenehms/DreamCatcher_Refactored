import React from 'react'
import TodoEditDeleteFormTag from '../TodoEditDeleteFormTag/TodoEditDeleteFormTag'

const TodoEditDeleteForm = ({todoListInfo, readTodoFunction}) => {

  return (

    <ul>

      {todoListInfo.map((individual, index) => { 
        // console.log(individual);
        return <TodoEditDeleteFormTag key={index} listId={individual.id} whatTodo={individual.todo} readTodoFunction={readTodoFunction}/>
      })} {/* 여기서 id 는 key 처럼 예약어가 아니다! 똑같이 프롭스의 이름이 될뿐!  */}
      
    </ul>

  )
}

export default TodoEditDeleteForm
