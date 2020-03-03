import React from "react";
import {useForm} from "react-hook-form";

export default function Signup() {
    const {register, handleSubmit, errors} = useForm()
    const onSubmit = data => {console.log(data)}

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
        <input name="username"  ref={register} />
        <input name="username" type="email" ref={register} />
        <input name="password" type="password" ref={register} />
        <input type="submit" />
      </form>
    )
}