import React, {useState} from 'react';
import styled from 'styled-components';
import {useForm} from 'react-hook-form';
import FormGroup from "./FormGroup";


function LoginForm (props) {

    const {
    } = props;

    const {register, errors, watch, handleSubmit} = useForm();
    const [value, setValue] = useState({})
    const onsubmit = () => {

    }

    return (
        <Container handleSubmit={onsubmit}>
            <FormGroup name='email'
                       label='Email'
                       placeholder=''
                       register={register({required: true})}
                       errorType={errors?.email?.type}
            />

            <FormGroup name='password'
                       label='Password'
                       placeholder=''
                       register={register({required: true})}
                       errorType={errors?.password?.type}
            />
            <Button>Login</Button>
        </Container>
    )
}
const Container = styled.div`
  position:relative;
  top: 0;
  
`;
const Button = styled.button`
  width: 100%;
  background: #000;
  color: #fff;
  padding: 10px 10px;
  border-radius: 5px;
  border: none;
`;
export default LoginForm;