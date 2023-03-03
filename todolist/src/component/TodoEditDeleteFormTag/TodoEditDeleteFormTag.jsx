import React, { useState } from 'react'
import { sendForDeleteTodoFunction, sendForEditTodoFunction } from '../../api/Auth'

const TodoEditDeleteFormTag = ({listId, whatTodo, isChecked, readTodoFunction}) => {

    const deleteTodoFunction = async () => { // 투두 삭제함수
       await sendForDeleteTodoFunction(listId);
       readTodoFunction();
        // 삭제 이후 서버에서 리스트가 삭제된 데이터를 다시 가지고 와야하므로 한 번더 read 렌더링을 시킨다.
    }

    const [openEditInput, setOpenEditInput] = useState(false);
    const [editContents, setEditContents] = useState(whatTodo);
    
    const open = () => { // 수정버튼 클릭시 인풋창으로 변하게 하기 위한 함수 (삼항연산자에 활용)
        setOpenEditInput(true);
    }
    const close = () => { // 취소버튼 클릭시 스팬테그로 변하게 하기위한 함수 (삼항연산자에 활용)
        setOpenEditInput(false);
        setEditContents(whatTodo);
    }

    const editContentsOnChangeFunction = (e) => {
        setEditContents(e.target.value);
    }

    const [isDone, setIsDone] = useState(isChecked);

    const isCheckedOnChangeFunction = (e) => {
        setIsDone(e.target.checked);
    }

    const sendContentsForEdit = {
        todo : `${editContents}`,
        isCompleted : isDone
    }

    const editTodoFunction = async () => {
        await sendForEditTodoFunction(listId, sendContentsForEdit);
        readTodoFunction();
        setOpenEditInput(false);
    }

  return (

        <li>

            <label>

                <input type="checkbox" checked={isDone} onChange={isCheckedOnChangeFunction}/>
                {openEditInput ? 
                <input type="text" value={editContents} onChange={editContentsOnChangeFunction}/> 
                : <span>{whatTodo}</span>}

            </label>

            {openEditInput ? 
            <button onClick={editTodoFunction}>제출</button> 
            : <button data-testid="modify-button" onClick={open}>수정</button>}

            {openEditInput ? 
            <button onClick={close}>취소</button> 
            : <button data-testid="delete-button" onClick={deleteTodoFunction}>삭제</button>}

        </li>

    )
}

export default TodoEditDeleteFormTag
