import React from "react";
import { useNavigate } from "react-router-dom";
import { sendForSigninFunction } from "../../api/Auth";
import { Button, TextField, Link, Grid } from "@mui/material";
import { useSigninInput } from "../../hook/useSigninInput";

const SigninForm = () => {
  const navigate = useNavigate();
  // const moveToSignupPageFunction = () => {
  //     navigate("/signup");
  // };

  const [identification, identificationChangeFunction] = useSigninInput();
  const [password, passwordChangeFunction] = useSigninInput();

  const sendContentsForSignin = {
    email: `${identification}`,
    password: `${password}`,
  };

  const signinFunction = async (e:React.MouseEvent<HTMLButtonElement>) => {
    // 이 함수는 SignupForm 에서 한 것처럼 api 폴더 내 Auth.jsx 파일로 따로 분리해둘 수 있음
    e.preventDefault();
    const res = await sendForSigninFunction(sendContentsForSignin);
    if (res?.status === 200) {
      // 꼭 써야할까? 고민해보기 어차피 sendForSigninFunction 가 try, catch 로 잡아내주지 않을까? 고민해보기
      localStorage.setItem("accessToken", res.data.access_token); // JWT 로컬스토리지 저장
      navigate("/todo");
    }

    // console.log(res);
  };

  return (
    <form>
      <TextField
        id="Identification"
        label="Email Address"
        type="text"
        sx={{ mt: 5 }}
        required
        fullWidth
        name="email"
        autoComplete="email"
        onChange={identificationChangeFunction}
      />

      <TextField
        id="Password"
        label="Password"
        type="password"
        sx={{ mt: 1.5 }}
        required
        fullWidth
        name="password"
        onChange={passwordChangeFunction}
      />

      <Button
        variant="contained"
        type="submit"
        sx={{ mt: 3, mb: 2 }}
        fullWidth
        onClick={signinFunction}
      >
        Signin
      </Button>

      <Grid container spacing={2}>
        <Grid item xs></Grid>
        <Grid item>
          <Link href="/signup">Go To Signup</Link>
        </Grid>
      </Grid>
      {/* <Button variant="contained" type="submit" fullWidth onClick={moveToSignupPageFunction}>Go to Signup</Button> */}
    </form>
  );
};

export default SigninForm;
