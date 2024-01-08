import React from "react";
import { Navigate } from "react-router-dom";
import SignupForm from "../../component/SignupForm/SignupForm";
import { Typography, Avatar, CssBaseline } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import * as S from "./SignupStyle";

const Signup = () => {
  const isSignin = !!localStorage.getItem("accessToken");

  return isSignin ? (
    <Navigate to="/todo" /> // <Todo/> 로 가도록 설정해줄 수도 있지만 그렇게 하면 url 이 /signup 인채로 남음 ! 그래서 Navigate 로 하는 게 사용자경험에 더 좋다!
  ) : (
    <S.WrapperMuiContainer component="main" maxWidth="xs">
      <CssBaseline />

      <S.SignupFormMuiBox>
        <Avatar sx={{ boxShadow: 5, margin: 2, bgcolor: "secondary.main" }}>
          {/* Avatar 컴포넌트의 스타일도 스타일드 컴포넌트로 빼고 싶은데 잘 안되었다 .. ! */}
          <LockOutlinedIcon />
        </Avatar>

        <Typography component="h1" variant="h5">
          Signup Page
        </Typography>

        <SignupForm />
      </S.SignupFormMuiBox>
    </S.WrapperMuiContainer>
  );
};

export default Signup;
