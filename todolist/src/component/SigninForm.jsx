import React from 'react'
import { useNavigate } from 'react-router-dom'

const SigninForm = () => {
    const navigate = useNavigate();
    const moveFunction = () => {
        navigate("/signup");
    };

  return (
    <form>
      <input type="text"/>
      <input type="password"/>
      <button>Signin</button>
      <button onClick={moveFunction}>Go to Signup</button>
    </form>
  )
}

export default SigninForm
