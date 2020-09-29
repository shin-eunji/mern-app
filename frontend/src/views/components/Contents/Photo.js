import React from 'react';
import styled from 'styled-components';

function Photo (props) {

    const {
        item
    } = props;

    return (
        <Container>
            <PhotoItem>
                <img src={item.urls.small} alt="photo"/>
            </PhotoItem>
        </Container>
    )
}

const Container = styled.div`
`
const PhotoItem = styled.div`
    
`;
export default Photo;