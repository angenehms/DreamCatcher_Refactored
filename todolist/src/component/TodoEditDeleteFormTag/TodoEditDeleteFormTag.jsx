import React, { useState } from 'react'
import { sendForDeleteTodoFunction } from '../../api/Auth'

const TodoEditDeleteFormTag = ({whatTodo, listId, readTodoFunction}) => {

    const deleteTodoFunction = async () => { // 투두 삭제함수
       await sendForDeleteTodoFunction(listId)
       readTodoFunction();
        // 삭제 이후 서버에서 리스트가 삭제된 데이터를 다시 가지고 와야하므로 한 번더 read 렌더링을 시킨다.
    }

    const [openEditInput, setOpenEditInput] = useState(false);
    const [editContents, setEditContents] = useState(whatTodo)
    
    const open = () => {
        setOpenEditInput(true);
    }
    const close = () => {
        setOpenEditInput(false);
        setEditContents(whatTodo);
    }

    const editContentsOnChangeFunction = (e) => {
        setEditContents(e.target.value);
    }

  return (

        <li>
            <label>

                <input type="checkbox"/>
                {openEditInput ? 
                <input type="text" value={editContents} onChange={editContentsOnChangeFunction}/> 
                : <span>{whatTodo}</span>}

            </label>

            {openEditInput ? 
            <button>제출</button> 
            : <button data-testid="modify-button" onClick={open}>수정</button>}

            {openEditInput ? 
            <button onClick={close}>취소</button> 
            : <button data-testid="delete-button" onClick={deleteTodoFunction}>삭제</button>}

        </li>

    )
}

export default TodoEditDeleteFormTag
