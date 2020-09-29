import React, {useState} from 'react';
import styled from 'styled-components';
import {AiOutlineEllipsis} from "react-icons/ai";
import {Button, ButtonMint} from "../Button/Button.styled";
import LoginForm from "../Form/LoginForm";
import {Link} from "react-router-dom";
import {navigate} from "../../../lib/History";
import PopupMore from "../Popup/More";

function Nav (props) {

    const {} = props;

    const [popup, handlePopup] = useState(false)

    const onPopup = () => {
        handlePopup(true)
    }

    return (
        <Container>
            <NavItem>Topics</NavItem>
            <NavItem>Explore</NavItem>
            <NavItem onClick={onPopup}>
                <AiOutlineEllipsis className={"more"}/>
            </NavItem>
            {
                popup && <PopupMore handlePopup={handlePopup}/>
            }
            <Button>
                <SubmitButton>Submit a photo</SubmitButton>
            </Button>
            <NavItem onClick={() => navigate('/login')}>Login</NavItem>
            <Button>
                <JoinButton>Join free</JoinButton>
            </Button>
        </Container>
    )
}

const Container = styled.div`
  display:flex;
  align-items:center;  
  margin-left: 20px;
`
const NavItem = styled(Link)`
  margin: 0 10px;
  cursor: pointer;
  background: none;
  border: none; 
  padding: 10px 6px;
  font-size: 15px;
  color: #666;
  text-decoration: none;
  .more {
    font-size: 24px;
    font-weight:bold;
    transition: .2s;
    
  }
`;
const SubmitButton = styled.div`
  color: #666;
  border: 1px solid #aaa;
  border-radius: 5px;
  padding: 8px 12px;
`;
const JoinButton = styled.div`
  background: #45b06e;
  border: 1px solid #45b06e;
  padding: 8px 12px;
  color: #fff;
  border-radius: 5px;
`;
export default Nav;