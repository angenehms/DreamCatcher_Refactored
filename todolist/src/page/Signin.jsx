import React from 'react'
import SigninForm from '../component/SigninForm/SigninForm'
import { Navigate } from 'react-router-dom'
import Typography from '@mui/material/Typography';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import CssBaseline from '@mui/material/CssBaseline';
import { ImgArrayForRandom } from '../component/ImgArrayForRandom/ImgArrayForRandom';

const Signin = () => {

  const isSignin = !!localStorage.getItem("accessToken");

  const imgRandomNumber = Math.floor(Math.random() * ImgArrayForRandom.length);
  const randomBackgroundImg = ImgArrayForRandom[imgRandomNumber]

  return (

    isSignin ? 

      <Navigate to="/todo"/> : // <Todo/> 로 가도록 설정해줄 수도 있지만 그렇게 하면 url 이 /signin 인채로 남음 ! 그래서 Navigate 로 하는 게 사용자경험에 더 좋다
      

      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: `url(${randomBackgroundImg})`,
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} elevation={6} square>

          <Container component="main" maxWidth="xs">

            <Box sx={{ marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

              <Avatar sx={{ boxShadow:5, m: 2, bgcolor:"secondary.main" }}>
                <LockOutlinedIcon/> 
              </Avatar>

              <Typography component="h1" variant="h5">Signin Page</Typography>
              <SigninForm/>  

            </Box>

          </Container> 

        </Grid>
        
      </Grid>
  
  )
}

export default Signin
