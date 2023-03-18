import React, { useState } from 'react';
import { sendForDeleteTodoFunction, sendForEditTodoFunction } from '../../api/Auth';
import Grid from '@mui/material/Grid';
import IconButton from "@mui/material/IconButton";
import EditIcon from '@mui/icons-material/Edit';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import DeleteOutlineRoundedIcon from '@mui/icons-material/DeleteOutlineRounded';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';


const TodoUpdateDeleteFormDetails = ({listId, whatTodo, isChecked, readTodoFunction}) => {

    const deleteTodoFunction = async () => { // 투두 삭제함수
       await sendForDeleteTodoFunction(listId);
       readTodoFunction();
        // 삭제 이후 서버에서 리스트가 삭제된 데이터를 다시 가지고 와야하므로 한 번더 read 렌더링을 시킨다.
    };

    const [openEditInput, setOpenEditInput] = useState(false);
    const [editContents, setEditContents] = useState(whatTodo);
    
    const open = () => { // 수정버튼 클릭시 인풋창으로 변하게 하기 위한 함수 (삼항연산자에 활용)
        setOpenEditInput(true);
    }
    const close = () => { // 취소버튼 클릭시 스팬테그로 변하게 하기위한 함수 (삼항연산자에 활용)
        setOpenEditInput(false);
        setEditContents(whatTodo);
    };

    const editContentsOnChangeFunction = (e) => {
        setEditContents(e.target.value);
    };

    const [isDone, setIsDone] = useState(isChecked);

    const isCheckedOnChangeFunction = (e) => {
        // console.log("isChecked", isChecked);
        // console.log("e.target.checked", e.target.checked);
        // console.log("isDone", isDone);
        setIsDone(e.target.checked);
        editTodoFunction();
    };

    const sendContentsForEdit = {
        todo : `${editContents}`,
        isCompleted : !isDone // 느낌표를 제거하면 할일 완료 체크 후 새로고침하면 업데이트가 안되는 현상이 일어난다.
    };

    const editTodoFunction = async () => {
        if ( editContents ) {
            await sendForEditTodoFunction(listId, sendContentsForEdit);
            readTodoFunction();
            setOpenEditInput(false);
        } else {
             alert("수정할 내용을 입력해주세요!");
        }
    };

  return (

        <li>
            <Grid container>
                <Grid item xs={10}>
                    <label>

                        <input type="checkbox" checked={isDone} onChange={isCheckedOnChangeFunction}/>
                        {openEditInput ? 
                        <input type="text" value={editContents} onChange={editContentsOnChangeFunction}/> 
                        : <span>{whatTodo}</span>}

                    </label>
                </Grid>

                <Grid item xs={2}>
                    {openEditInput ? 
                    <IconButton onClick={editTodoFunction}><TaskAltIcon/></IconButton> 
                    : <IconButton data-testid="modify-button" onClick={open}><EditIcon/></IconButton>}

                    {openEditInput ? 
                    <IconButton onClick={close}><HighlightOffIcon/></IconButton> 
                    : <IconButton data-testid="delete-button" onClick={deleteTodoFunction}><DeleteOutlineRoundedIcon/></IconButton>}
                </Grid>
            </Grid>
        </li>

    )
};

export default TodoUpdateDeleteFormDetails
