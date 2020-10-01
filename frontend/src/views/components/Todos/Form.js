import React, {useEffect, useRef, useState} from 'react';
import styled from 'styled-components';
import { useForm } from "react-hook-form";
import FormGroup from "../Form/FormGroup";
import {navigate} from "../../../lib/History";
function Form (props) {

    const {
        onSubmit,
    } = props;

    const formRef = useRef(null);

    const { register, handleSubmit, watch, errors } = useForm();

    console.log(watch('example'));

    const [rect, setRect] = useState({})

    useEffect(() => {
        if(formRef.current) {
            setRect(formRef.current.getBoundingClientRect())
        }
    }, [])

    return (
        <Container ref={formRef}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <FormGroup name="title"
                           label="제목"
                           register={register({ required: true })}
                           errorType={errors?.title?.type}
                />
                <FormGroup name="description"
                           label="내용"
                           register={register({ required: true })}
                           errorType={errors?.description?.type}
                />

                <AddButton onClick={() => {
                    navigate('/todos')
                }}>할 일 추가</AddButton>
            </form>
        </Container>
    )
}

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
`
const AddButton = styled.button`
    
`;
export default Form;