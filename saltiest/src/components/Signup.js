import React from "react";
import {useForm} from "react-hook-form";

export default function Signup() {
    const {register, handleSubmit, errors} = useForm()
    const onSubmit = data => {console.log(data)}

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
        <input name="username" value="" ref={register} />
        <input name="username" value="" type="email" ref={register} />
        <input name="password" type="password" value="" ref={register} />
        <input type="submit" />
      </form>
    )
}