import React from "react";
import {useForm} from "react-hook-form";
import styled from 'styled-components'

const SignupForm = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 1%;
`

export default function Signup() {
    const {register, handleSubmit, errors} = useForm()
    const onSubmit = data => {console.log(data)}

    return (
      <SignupForm className="signup">
        <h1>Sign up</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
        <input name="username" placeholder="username"  ref={register} />
        <input name="email" placeholder="email" type="email" ref={register} />
        <input name="password" placeholder="password" type="password" ref={register} />
        <input type="submit" />
      </form>
      </SignupForm>
    )
}