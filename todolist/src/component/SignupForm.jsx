import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { sendForSignupFunction } from '../api/Auth'
// sendForSignupFunction 는 회원가입을 위해 필요내용을 보내주는 틀(함수)

const SignupForm = () => {

    const navigate = useNavigate();
    const [identification, setIdentification] = useState("");
    const [password, setPassword] = useState("");
    const [passwordChecking, setPasswordChecking] = useState("");

    const changeIdentificationValue = (e) => {
        setIdentification(e.target.value);
    } // 아이디 인풋값 변경함수
    const changePasswordValue = (e) => {
        setPassword(e.target.value);
    } // 비밀번호 인풋값 변경함수
    const changePasswordChecking = (e) => {
        setPasswordChecking(e.target.value);
    } // 비밀번호확인 인풋값 변경함수

    const sendContext = {
        email : `${identification}`,
        password : `${password}` 
    }

    const signupFunction = async (e) => { // 회원가입 시켜주는 함수 그후 signin 페이지 이동
        e.preventDefault();
        const res = await sendForSignupFunction(sendContext); // res 를 {status} 로 구조분해할당 가능
        if ( res.status === 201 ) { // res.status 로 쓴 부분을 위에서 구조분해할당 했다면 status 로 받기 가능
            navigate("/signin");
        }

        // console.log(res);
;    }

    const isEqualPassword = (password === passwordChecking); // 비밀번화 확인 일치여부
    const validityCheckFunction = () => { // 유효성검사 함수
        if (identification.includes("@") && password.length >= 8 && isEqualPassword) {
            return true;
        } else {
            return false;
        } 
    }

    const validityResult = validityCheckFunction(); // 유효성검사 결과값(불리언)

  return (
    <form>
      <input type="text" value={identification} onChange={changeIdentificationValue}/>
      <input type="password" value={password} onChange={changePasswordValue}/>
      <input type="password" value={passwordChecking} onChange={changePasswordChecking}/>
      <button disabled={!validityResult} onClick={signupFunction}>Signup</button>
    </form>
  )
}

export default SignupForm
