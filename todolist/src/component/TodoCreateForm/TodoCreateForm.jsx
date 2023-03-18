import React, { useState } from 'react';
import { sendForAddTodoFunction } from '../../api/Auth';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';

const TodoCreateForm = ({readTodoFunction}) => {

  const [addTodoInputValue, setAddTodoInputValue] = useState(""); // 투두 추가

  const changeAddTodoValue = (e) => { // 투두 추가 인풋값 변경함수
    setAddTodoInputValue(e.target.value);
    // console.log(addTodoInputValue);
  };

  const addTodoFunction = async () => { // 추가 버튼 누르면 서버에 Create 해주는 함수
    await sendForAddTodoFunction({todo: `${addTodoInputValue}`});
    setAddTodoInputValue("");
    readTodoFunction();
  };

  return (
    <Grid container columnSpacing={1} sx={{ alignItems: "center" }}>

      <Grid item xs={11}>
        <TextField sx={{width:"100%"}} type="text" data-testid="new-todo-input" value={addTodoInputValue} onChange={changeAddTodoValue}/>
      </Grid>

      <Grid item xs={1}>
        <Button data-testid="new-todo-add-button" onClick={addTodoFunction}>Add</Button>
      </Grid>

    </Grid>
  )
};

export default TodoCreateForm
