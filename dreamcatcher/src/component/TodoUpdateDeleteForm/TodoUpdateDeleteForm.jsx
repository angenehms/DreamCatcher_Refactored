import React from 'react'
import TodoUpdateDeleteFormDetails from '../TodoUpdateDeleteFormDetails/TodoUpdateDeleteFormDetails'
import { DreamCatcherListWrap } from './TodoUpdateDeleteFormStyle';

const TodoUpdateDeleteForm = ({todoListInfo, readTodoFunction}) => {

  return (

    <>

      <DreamCatcherListWrap>

        {todoListInfo.map((individual) => { 
          // console.log(individual);
          return <TodoUpdateDeleteFormDetails 
                key={individual.id} 
                listId={individual.id} 
                whatTodo={individual.todo} 
                isChecked={individual.isCompleted} 
                readTodoFunction={readTodoFunction}
              />
            }
          )
        } {/* 여기서 id 는 key 처럼 예약어가 아니다! 똑같이 프롭스의 이름이 될뿐! */}
    
      </DreamCatcherListWrap>
      
    </>

  )
};

export default TodoUpdateDeleteForm
