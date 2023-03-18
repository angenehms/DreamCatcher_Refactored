import React, { useEffect, useState } from 'react';
import { sendForReadTodoFunction } from '../api/Auth';
import SignoutForm from '../component/SignoutForm/SignoutForm';
import TodoCreateForm from '../component/TodoCreateForm/TodoCreateForm';
import TodoUpdateDeleteForm from '../component/TodoUpdateDeleteForm/TodoUpdateDeleteForm';
import { Navigate } from 'react-router-dom';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';

const Todo = () => {

  const [todoListInfo, setTodoListInfo] = useState([]);

  const isSignin = !!localStorage.getItem("accessToken");

  const readTodoFunction = async () => {

      // const res = await sendForReadTodoFunction();
      // const listInfo = res.data;
      // setTodoListInfo(listInfo);

    if ( isSignin ) {

        const res = await sendForReadTodoFunction();
        const listInfo = res.data;
        // console.log(listInfo)
        setTodoListInfo(listInfo);

      } else { 

        alert("로그인 후 이용 가능합니다!") } // 왜 alert 가 두번씩 뜰까?

  }

  // 바로 아래 코드는 노란줄 없애는 eslint 코드
  // eslint-disable-next-line react-hooks/exhaustive-deps 
  useEffect(() => {readTodoFunction()}, []);
  // 이거 안쓰면 토큰이 있는 경우 url 에서 다시 /todo 페이지로 이동 시에 재렌더링이 안돼서 빈 투두리스트가 뜨게 된다. 왜냐면 CRUD 버튼들에는 read 펑션이 있는데 url 로 /todo 로 이동하면 따로 업데이트된 렌더링을 시켜줄 함수가 없기 때문에(read 펑션이 없기 때문에) 브라우저가 최초로 렌더링 시킨 투두페이지(로그인 전)를 보여주게 된다.
 
  
  return (

    isSignin ? 

    <Container component="main" maxWidth="md">
      <CssBaseline/>

      <Box sx={{ marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h1>Dream Catcher</h1>
        <TodoCreateForm readTodoFunction={readTodoFunction}/>
        <TodoUpdateDeleteForm readTodoFunction={readTodoFunction} todoListInfo={todoListInfo}/>
        <SignoutForm/>
      </Box>

    </Container> :
    <Navigate to="/signin"/> // <Signin/> 으로 가도록 설정해줄 수도 있지만 그렇게 하면 url 이 /signup 인채로 남음 ! 그래서 Navigate 로 하는 게 사용자경험에 더 좋다
  )
}

export default Todo
