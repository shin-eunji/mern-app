import React from 'react';
import styled from 'styled-components';
import {Route, Switch} from "react-router-dom";

import Home from "./views/pages/Home";
import Login from "./views/pages/Login";
import Todos from "./views/pages/Todos";

function Routes (props) {

    const {} = props;

    return (
        <Container>
            <Switch>
                <Route exact path={'/'} component={Home} />
                <Route exact path={'/login'} component={Login} />
                <Route path={'/todos'} component={Todos} />
            </Switch>
        </Container>
    )
}

const Container = styled.div`
`
export default Routes;