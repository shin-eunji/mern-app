import React, {useEffect} from 'react';
import styled from 'styled-components';
import {useSelector} from "react-redux";
import {todosActions} from "../../../redux/actionCreators";
import {navigate} from "../../../lib/History";

function Detail (props) {

    const {
        match
    } = props;

    const id = match.params.id;

    const {detail} = useSelector(state => state.todos);
    const todo = detail[id];

    console.log("id", id);

    useEffect(() => {
        if(!todo) {
            todosActions.getTodoById(id);
        }
    }, [])

    const onDelete = () => {
        todosActions.deleteTodo(id)
    }

    if(!todo) return 'is loading...'

    return (
        <Container>
            <ButtonGroup>
                <Button sort={"info"} size={'sm'} onClick={() => navigate(`/todos/update/${id}`)}>수정</Button>
                <Button sort={"danger"} size={'sm'}>삭제</Button>
            </ButtonGroup>
            <h2>{todo?.title}</h2>
            <p>{todo?.description}</p>
        </Container>
    )
}

const Container = styled.div`
  

`
const ButtonGroup = styled.div`
    display:flex;
    justify-content: flex-end;
    padding: 20px;
`;
const Button = styled.button`
    height: 42px;
    padding: 0 20px;
    font-size: 14px;
    color: #333;
    background: #fff;
    -webkit-border-radius: 4px;-moz-border-radius: 4px;border-radius: 4px;
    outline: 0;
    display: flex;
    align-items:center;
    justify-content:center;
    cursor: pointer;
    border: 0;
    & + & {
      margin-left: 8px;
    }
    
    ${props => props.size === 'sm' && `
        height: 33px;
        font-size: 11px;
        padding: 0 10px;
    `}
   
    
    ${props => props.sort === 'info' && `
        background: #ddd;
        color: #333;
    `}
    
    ${props => props.sort === 'danger' && `
        background: #ff0000;
        color: #fff;
    `}
    
    ${props => props.sort === 'primary' &&`
        background: #2ab7fd;
        color: #fff;   
    `}
`;
export default Detail;