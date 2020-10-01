import React, {useEffect} from 'react';
import styled from 'styled-components';
import TodosContainer from "../../containers/Todos";
import {todoAction} from "../../../redux/actionCreators";

function List (props) {

    const {} = props;

    useEffect(() => {
        todoAction.getTodos()
    }, [])

    return (
        <Container>
            <TodosContainer/>
        </Container>
    )
}

const Container = styled.div`
`
export default List;