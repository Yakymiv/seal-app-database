import React from 'react';
import styled from 'styled-components';

const StyleP = styled.p`
    display: flex;
    width: 60px;
    height: 40px;
    font-family: 'Roboto-Bold';
    font-size: 36px;
    justify-content: center;
    color: ${props => props.myMachine === 'komax' ? '#FF7A00' : props.myMachine === 'megomat' ? '#474FFF' : '#888'};
    margin: 0px;
    border-right: 1px solid #2B2B2B;
`;

const MachineNumber = ({children, machine}) => {
    return(
        <StyleP myMachine={machine}>{children}</StyleP>
    );
}

export default MachineNumber;