import React, { useState } from 'react'
import { axiosAuthAPI } from '../../api/Client';

const TodoList = () => {

  const [addTodoInputValue, setAddTodoInputValue] = useState(""); // 투두 추가

  const changeAddTodoValue = (e) => { // 투두 추가 인풋값 변경함수
    setAddTodoInputValue(e.target.value);
    // console.log(addTodoInputValue);
  } 

  const addTodoFunction = async () => { // 추가 버튼 누르면 서버에 Create 해주는 함수
    const res = await axiosAuthAPI.post("/todos", {todo: `${addTodoInputValue}`});
    // console.log(res);
    // console.log(res.data.todo);
  } 

  return (
    <>
      <input type="text" value={addTodoInputValue} onChange={changeAddTodoValue}/>
      <button onClick={addTodoFunction}>추가</button>
    </>
  )
}

export default TodoList
