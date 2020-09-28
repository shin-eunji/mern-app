import React from 'react';
import styled from 'styled-components';
import Header from "../../components/Header";
import Visual from "../../components/Visual";
import LoginForm from "../../components/Form/LoginForm";
import {Switch, Route} from "react-router-dom";

function Home (props) {

    const {} = props;

    return (
        <Container>
            <Header/>
            <Visual/>
            <LoginForm/>
            <Switch>
                <Route exact path={'/login'} component={LoginForm}/>
            </Switch>
        </Container>
    )
}

const Container = styled.div`
`
export default Home;