import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Error from '../page/Error'
import Signin from '../page/Signin'
import Signup from '../page/Signup'
import Todo from '../page/Todo'

const Router = () => {

  const isSignin = !!localStorage.getItem("accessToken"); // 로그인 여부확인

  return (
    <BrowserRouter>
        <Routes>

            <Route path="/" element={<Navigate to="/signin"/>}/>
            <Route path="/signin" element={isSignin ? <Navigate to="/todo"/> : <Signin/>}/>
            <Route path="/signup" element={isSignin ? <Navigate to="/todo"/> : <Signup/>}/>
            <Route path="/todo" element={isSignin ? <Todo/> : <Navigate to="/signin"/>}/>
            <Route path="/*" element={<Error/>}/>
            
        </Routes>
    </BrowserRouter>
  )
}

export default Router
