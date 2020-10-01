import React from 'react';
import styled from 'styled-components';
import Item from "./Item";
import {navigate} from "../../../lib/History";
import {useSelector} from "react-redux";

function TodosContainer (props) {

    const {
        list = []
    } = props;

    // const {list} = useSelector(state => state.todos)

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
  display:flex;
  align-items:flex-start;
  justify-content:center; 
`
const List = styled.div`
    
`;
const ButtonTodo = styled.button`
  padding: 10px 20px;
  text-align:center;
  cursor: pointer;
  background: #38aebe;
  color: #fff;
  border: none;
  border-radius: 5px;
`;
export default TodosContainer;