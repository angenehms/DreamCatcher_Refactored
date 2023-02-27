import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { axiosAuthAPI } from '../api/Client';

const SigninForm = () => {
    const navigate = useNavigate();
    const moveToSignupPageFunction = () => {
        navigate("/signup");
    };

    const [identification, setIdentification] = useState("");
    const [password, setPassword] = useState("");

    const sendContents = {
      email : `${identification}`, 
      password : `${password}` 
    }

    const signinFunction = async (e) => {
      e.preventDefault();
      const { status } = await axiosAuthAPI.post("/auth/signin", sendContents);
      if ( status === 200 ) {
        navigate("/todo");
      }
    }

    const changeIdentificationValue = (e) => {
      setIdentification(e.target.value);
    } // 아이디의 인풋값을 잡아내어 상태변경을 하기위한 함수
    const changePasswordValue = (e) => {
      setPassword(e.target.value);
    } // 패스워드의 인풋값을 잡아내어 상태변경을 하기위한 함수

  return (
    <form>
      <input type="text" onChange={changeIdentificationValue}/>
      <input type="password" onChange={changePasswordValue}/>
      <button onClick={signinFunction}>Signin</button>
      <button onClick={moveToSignupPageFunction}>Go to Signup</button>
    </form>
  )
}

export default SigninForm
