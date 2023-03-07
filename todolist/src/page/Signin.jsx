import React from 'react'
import SigninForm from '../component/SigninForm/SigninForm'
import { Navigate } from 'react-router-dom'

const Signin = () => {

  const isSignin = !!localStorage.getItem("accessToken");

  return (

    isSignin ? 

      <Navigate to="/todo"/> : // <Todo/> 로 가도록 설정해줄 수도 있지만 그렇게 하면 url 이 /signin 인채로 남음 ! 그래서 Navigate 로 하는 게 사용자경험에 더 좋다
      <div>
        <h1>Signin Page</h1>
        <SigninForm/>  
      </div>
  
  )
}

export default Signin
