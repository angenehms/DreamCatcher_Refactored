import React from 'react';
import { useNavigate } from 'react-router-dom';
import { sendForSignupFunction } from '../../api/Auth';
import { TextField, Button, Grid, Link } from '@mui/material';
import { useSignupInput } from '../../hook/useSignupInput';

// sendForSignupFunction 는 회원가입을 위해 필요내용을 보내주는 틀(함수)

const SignupForm = () => {

    const navigate = useNavigate();
    const [identification, identificationChangeFunction, identificationValidity] = useSignupInput("");
    const [password, passwordChangeFunction, passwordValidity] = useSignupInput(""); 
    const [passwordCheck, passwordCheckChangeFunction] = useSignupInput("");
    // 배열의 두번째 인덱스인 함수들은 사실 똑같은 역할을 하지만 이름만 다르다고 생각한다! 그럼 왜 굳이 이름을 다르게 하는걸까? 왜냐면 의미는 같지만 두번 선언할 수 없게 되어있다. 이름을 갖게하면 에러가 뜬다.

    const passwordCheckValidity = () => {
        if ( password.inputValue === passwordCheck.inputValue ) {
            return true;
        } else {
            return false;
        }
    };

    const sendContentsForSignup = {
        email : `${identification.inputValue}`,
        password : `${password.inputValue}` 
    };

    const signupFunction = async (e) => { // 회원가입 시켜주는 함수 그후 signin 페이지 이동
        e.preventDefault();
        const res = await sendForSignupFunction(sendContentsForSignup); // res 를 {status} 로 구조분해할당 가능
        if ( res.status === 201 ) { // res.status 로 쓴 부분을 위에서 구조분해할당 했다면 status 로 받기 가능
            navigate("/signin");
        }

        // console.log(res);
    };

    const validityResult = identificationValidity && passwordValidity && passwordCheckValidity(); 
    // 유효성검사 결과값(불리언)

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
            value={identification.inputValue} 
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
            value={password.inputValue} 
            onChange={passwordChangeFunction}
        />

        <TextField 
            id="PasswordCheck"
            label="Password Check" 
            type="password" 
            sx={{ mt: 1.5 }} 
            required 
            fullWidth 
            name="passwordCheck" 
            value={passwordCheck.inputValue} 
            onChange={passwordCheckChangeFunction}
        />

        <Button 
            variant="contained" 
            type="submit" 
            sx={{ mt: 3, mb: 2 }} 
            fullWidth 
            disabled={!validityResult}
            onClick={signupFunction}
        >
            Signup
        </Button>

        <Grid container spacing={2}>
            <Grid item xs></Grid>
            <Grid item>
                <Link href="/signin">Go To Signin</Link>
            </Grid>
        </Grid>

    </form>

  )
};



export default SignupForm
