import React from 'react';
import styled from 'styled-components';
import {Switch, Route} from "react-router-dom";
import List from "./List";
import Detail from "./Detail";
import Write from "./Write";
import Update from "./Update";

function Todos (props) {

    const {} = props;

    return (
        <Container>
            <Switch>
                <Route exact path={'/todos'} component={List} />
                <Route path={'/todos/detail'} component={Detail} />
                <Route path={'/todos/write'} component={Write} />
                <Route path={'/todos/update'} component={Update} />
            </Switch>
        </Container>
    )
}

const Container = styled.div`
`
export default Todos;