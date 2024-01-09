import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import * as S from "./SignoutFormStyle";

const SignoutForm = () => {
  const navigate = useNavigate();

  const signoutFunction = async () => {
    // 로그아웃 함수
    await localStorage.removeItem("accessToken");
    navigate("/signin");
  };

  return (
    <S.WrapperBox>
      <Button
        size="small"
        variant="contained"
        color="error"
        onClick={signoutFunction}
      >
        Signout
      </Button>
    </S.WrapperBox>
  );
};

export default SignoutForm;
