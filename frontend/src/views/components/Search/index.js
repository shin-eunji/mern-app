import React from 'react';
import styled from 'styled-components';
import {AiOutlineSearch} from 'react-icons/ai'

function Search(props) {

    const {} = props;

    return (
        <Container>
            <SearchIcon>
                <AiOutlineSearch/>
            </SearchIcon>
            <SearchInput type={'text'}
                         placeholder={'Search free high-resolution photos'}
            />
        </Container>
    )
}

const Container = styled.div`
  display:flex;
  justify-content: space-between;
  align-items:center;
   padding: 5px 0;
`
const SearchIcon = styled.span`
  font-size: 26px;
  font-weight:bold;
  margin: 0 10px;
`;
const SearchInput = styled.input`
  border: none;
  flex: 1;
  width: 100%;
  background:none;
  padding: 10px 0;
`;
export default Search;