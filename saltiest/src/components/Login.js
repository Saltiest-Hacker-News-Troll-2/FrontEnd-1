import React from "react";
import {useForm} from "react-hook-form";
import styled from 'styled-components'

const LoginForm = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 1%;
`

export default function Login() {
    const {register, handleSubmit, errors} = useForm()
    const onSubmit = data => {console.log(data)}

    return (
      <LoginForm className ="loginForm">
        <h1>Login</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
        <input name="username" placeholder="username" ref={register} />
        <input name="password" placeholder="password" type="password"  ref={register} />
        <input type="submit" />
        </form>
      </LoginForm>
    )
}