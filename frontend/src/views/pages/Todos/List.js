import React from 'react';
import styled from 'styled-components';
import {useForm} from 'react-hook-form'
import {navigate} from "../../../lib/History";
import {useSelector} from "react-redux";

function List (props) {

    const {} = props;

    const {register, setValue, errors, handleSubmit, watch} = useForm({});

    const {list} = useSelector(state => state.todos)

    return (
        <Container>
            <List data={list}
            />

            <ButtonTodo onClick={() => {
                navigate('/todos/writee')
            }}>추가하기</ButtonTodo>
        </Container>
    )
}

const Container = styled.div`
`
const ButtonTodo = styled.div`
    
`;
export default List;