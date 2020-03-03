import React from "react";
import {useForm} from "react-hook-form";

export default function Login() {
    const {register, handleSubmit, errors} = useForm()
    const onSubmit = data => {console.log(data)}

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
        <input name="username" ref={register} />
        <input name="password" type="password"  ref={register} />
        <input type="submit" />
      </form>
    )
}