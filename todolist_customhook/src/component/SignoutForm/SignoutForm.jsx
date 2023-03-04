import React from 'react'
import { useNavigate } from 'react-router-dom';

const SignoutForm = () => {

    const navigate = useNavigate();

    const signoutFunction = async () => { // 로그아웃 함수
        await localStorage.removeItem("accessToken");
        navigate("/signin");
    };

  return (
    <>
     <button onClick={signoutFunction}>Signout</button> 
    </>
  )
};

export default SignoutForm
