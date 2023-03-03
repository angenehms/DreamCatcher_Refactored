import React from 'react'
import { sendForDeleteTodoFunction } from '../../api/Auth'

const TodoEditDeleteFormTag = ({whatTodo, listId, readTodoFunction}) => {

    const deleteTodoFunction = async () => { // 투두 삭제함수
       await sendForDeleteTodoFunction(listId)
       readTodoFunction();
        // 삭제 이후 서버에서 리스트가 삭제된 데이터를 다시 가지고 와야하므로 한 번더 read 렌더링을 시킨다.
    }

  return (

        <li>
            <label>
                <input type="checkbox"/>
                <span>{whatTodo}</span>
            </label>
            <button data-testid="modify-button">수정</button>
            <button data-testid="delete-button" onClick={deleteTodoFunction}>삭제</button>
        </li>

    )
}

export default TodoEditDeleteFormTag
