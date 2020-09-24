# Mern

## MongoDB

mongodb+srv://shineunji:<password>@cluster0.a6n2n.mongodb.net/<dbname>?retryWrites=true&w=majority


## Mongoosejs

### Schema

### Models

### connection


## react-hook-form

### useForm

```
import React from "react";
import { useForm } from "react-hook-form";

export default function App() {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = data => console.log(data);

  console.log(watch("example")); // watch input value by passing the name of it

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input name="example" defaultValue="test" ref={register} />
      
      <input name="exampleRequired" ref={register({ required: true })} />
      {errors.exampleRequired && <span>This field is required</span>}
      
      <input type="submit" />
    </form>
  );
}

```