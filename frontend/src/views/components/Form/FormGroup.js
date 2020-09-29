import React from 'react';
import styled from 'styled-components';


function FormGroup (props) {

    const {
        name,
        label,
        placeholder,
        register,
        errorType,
        value,
        onChange = () => {}
    } = props;

    return (
        <Container>
            <Label>{label}</Label>
            <Input name={name}
                   placeholder={placeholder}
                   value={value}
                   ref={register}
                   onChange={onChange}
            />
            {
                errorType === 'required' && '필수 입력 사항 입니다.'
            }
        </Container>
    )
}

const Container = styled.div`
  display: flex;
  flex-direction:column;
  width: 300px;
`
const Label = styled.label`
  font-size: 17px;
  font-weight: 500;
  margin-bottom: 10px;
`;
const Input = styled.input`
  padding: 8px 10px;
  margin-bottom: 20px;
  border: 1px solid #aaa;
  border-radius: 5px;
    
`;
export default FormGroup;