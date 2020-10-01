import React from 'react';
import styled from 'styled-components';

import {Switch, Route} from "react-router-dom";
import LoginForm from "../../components/Form/LoginForm";

import Header from "../../components/Header";
import Visual from "../../components/Visual";
import Contents from "../../components/Contents";
import Todos from "../Todos";


function Home (props) {

    const {} = props;

    return (
        <Container>
            <Header/>
            <Visual/>
            <Contents/>
            <Switch>
                <Route exact path={'/login'} component={LoginForm}/>
                <Route path={'/todos'} component={Todos} />
            </Switch>
        </Container>
    )
}

const Container = styled.div`
`
export default Home;