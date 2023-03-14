import React from 'react'
import SignupForm from '../component/SignupForm/SignupForm'
import { Navigate } from 'react-router-dom'
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

const Signup = () => {

  const isSignin = !!localStorage.getItem("accessToken");

  return (

    isSignin ? 

      <Navigate to="/todo"/> : // <Todo/> 로 가도록 설정해줄 수도 있지만 그렇게 하면 url 이 /signup 인채로 남음 ! 그래서 Navigate 로 하는 게 사용자경험에 더 좋다
      <Container component="main" maxWidth="xs">
        <Box sx={{ marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        
          <Avatar sx={{ boxShadow:5, m: 2, bgcolor:"secondary.main" }}>
            <LockOutlinedIcon/> 
          </Avatar>
          
          <Typography component="h1" variant="h5">Signup Page</Typography>
          <SignupForm/>
        </Box>
      </Container>
      
  )
}

export default Signup
