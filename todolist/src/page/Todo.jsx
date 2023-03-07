import React, { useState } from 'react'
import { sendForReadTodoFunction } from '../api/Auth'
import SignoutForm from '../component/SignoutForm/SignoutForm'
import TodoCreateForm from '../component/TodoCreateForm/TodoCreateForm'
import TodoUpdateDeleteForm from '../component/TodoUpdateDeleteForm/TodoUpdateDeleteForm'
import { Navigate } from 'react-router-dom'

const Todo = () => {

  const [todoListInfo, setTodoListInfo] = useState([]);

  const readTodoFunction = async () => {
    const res = await sendForReadTodoFunction();
    //console.log('확인',res)
    const listInfo = res.data;
    // console.log(listInfo);
    setTodoListInfo(listInfo);
  }

  // useEffect(() => {readTodoFunction()}, []); 
  // 각각 CRUD 버튼들에 onClick 속성으로 적용된 readTodoFunction 이 있으므로 이제 useEffect 는 안써도 된다고 판단하여 주석처리 하였다.
  // 그리고 이거 지우니까 토큰 없는 상태에서 url 에 /todo 경로 이동 시 뜨던 엑시오스 에러가 없어졌다.

  const isSignin = !!localStorage.getItem("accessToken");
  
  return (

    isSignin ? 

    <>
      <h1>Todo List</h1>

      <TodoCreateForm readTodoFunction={readTodoFunction}/>
      <TodoUpdateDeleteForm readTodoFunction={readTodoFunction} todoListInfo={todoListInfo}/>
      <SignoutForm/>
    </> :
    <Navigate to="/signin"/> // <Signin/> 으로 가도록 설정해줄 수도 있지만 그렇게 하면 url 이 /signup 인채로 남음 ! 그래서 Navigate 로 하는 게 사용자경험에 더 좋다
  )
}

export default Todo
