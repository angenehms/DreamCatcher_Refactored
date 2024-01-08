import React from 'react';
import { Navigate } from 'react-router-dom'
import SigninForm from '../../component/SigninForm/SigninForm';
import { Typography, Avatar, Container, Grid, CssBaseline} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import * as S from './SigninStyle'

const Signin = () => {

  const isSignin = !!localStorage.getItem("accessToken");

  return (

    isSignin ? 

      <Navigate to="/todo"/> : // <Todo/> 로 가도록 설정해줄 수도 있지만 그렇게 하면 url 이 /signin 인채로 남음 ! 그래서 Navigate 로 하는 게 사용자경험에 더 좋다

      <S.WrapperMuiGrid container component="main">

        <CssBaseline />
        
        <S.RandomImgMuiGrid
          className="randomImgMuiGrid"
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900]

          }}
        />

        <Grid 
          item 
          xs={12} 
          sm={8} 
          md={5} 
          elevation={6} 
          square
        >

          <Container component="main" maxWidth="xs">

            <S.SigninFormMuiBox>

              <Avatar sx={{ boxShadow: 5, margin: 2, bgcolor: "secondary.main" }}>
                <LockOutlinedIcon/> 
              </Avatar>

              <Typography component="h1" variant="h5">Signin Page</Typography>
              <SigninForm/>  

            </S.SigninFormMuiBox>

          </Container> 

        </Grid>
        
      </S.WrapperMuiGrid>
  
  )
}

export default Signin
