import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Error from "../page/Error/Error";
import Signin from "../page/Signin/Signin";
import Signup from "../page/Signup/Signup";
import Todo from "../page/Todo/Todo";

const Router = () => {
  // const isSignin = !!localStorage.getItem("accessToken"); // 로그인 여부확인

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/signin" />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
