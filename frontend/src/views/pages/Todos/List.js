import React, {useEffect} from 'react';
import styled from 'styled-components';
import TodosContainer from "../../containers/Todos";
import {todosActions} from "../../../redux/actionCreators";

function List (props) {

    const {} = props;

    useEffect(() => {
        todosActions.getTodos()
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