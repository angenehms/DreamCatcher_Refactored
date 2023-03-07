import React from 'react'
import SignupForm from '../component/SignupForm/SignupForm'
import { Navigate } from 'react-router-dom'

const Signup = () => {

  const isSignin = !!localStorage.getItem("accessToken");

  return (

    isSignin ? 

      <Navigate to="/todo"/> : // <Todo/> 로 가도록 설정해줄 수도 있지만 그렇게 하면 url 이 /signup 인채로 남음 ! 그래서 Navigate 로 하는 게 사용자경험에 더 좋다
      <div>
        <h1>Signup Page</h1>
        <SignupForm/>
      </div>
  )
}

export default Signup
