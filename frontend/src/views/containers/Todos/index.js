import React from 'react';
import styled from 'styled-components';
import {useSelector} from "react-redux";
import Item from "./Item";
import {navigate} from "../../../lib/History";

function TodosContainer (props) {

    const {} = props;

    const {list} = useSelector(state => state.todos)

    return (
        <Container>
            <List data={list}
                  render={(item, index) => <Item key={index}
                                                 {...item}
                                            />}
            />

            <ButtonTodo onClick={() => {
                navigate('/todos/write')
            }}>추가하기</ButtonTodo>
        </Container>
    )
}

const Container = styled.div`
`
const List = styled.div`
    
`;
const ButtonTodo = styled.div`
    
`;
export default TodosContainer;