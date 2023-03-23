import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Box } from '@mui/material';

const SignoutForm = () => {

    const navigate = useNavigate();

    const signoutFunction = async () => { // 로그아웃 함수
        await localStorage.removeItem("accessToken");
        navigate("/signin");
    };

  return (
    <Box sx={{position:"fixed", right:"5%", bottom:"0%", marginTop:"5%", mb:"5%"}}>
          <Button size="small" variant="contained" color="error" onClick={signoutFunction}>Signout</Button> 
    </Box>
  )
};

export default SignoutForm
