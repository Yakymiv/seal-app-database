import React from 'react';
import styled from 'styled-components';

const StyleDiv = styled.div`
    position: absolute;
    top: -7.5px;
    left: 45px;
    width: 75px;
    height: 15px;
    background: ${props => props.machine === 'megomat' ? '#474FFF' : props.machine === 'komax' ? '#FF7A00' : '#888'};
    display: flex;
    justify-content: center;
    span {
        display: flex;
        align-self: center;
        color: white;
        font-family: 'Roboto-Medium';
        font-size: 11px;
        letter-spacing: 1px;
    }
`;

const Marker = ({children}) => {
    return(
        <StyleDiv machine={children}>
            <span>{children.toUpperCase()}</span>
        </StyleDiv>
    );
}

export default Marker;