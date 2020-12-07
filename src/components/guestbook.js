import React, {useState} from "react"
import { useForm } from "react-hook-form"



const GuestBookForm = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = data => console.log(data);

  console.log(watch("example")); // watch input value by passing the name of it

  return (
    
    <form onSubmit={handleSubmit(onSubmit)}>

    <label>
        Title:
      <input name="title" ref={register({ required: true })} />
    </label>
    <label>
        Name:
      <input name="name" ref={register({required: true})} />
    </label>
    <label>
        Email:
      <input name="email" ref={register({required: true})} />
    </label>
    <label>
        Message:
      <textarea name="message" ref={register({required: true})} />
    </label>
      {errors.exampleRequired && <span>This field is required</span>}
      
      <input type="submit" />
    </form>
  );

}


export default GuestBookForm