import React from 'react';
import styled from 'styled-components';

const StyleH2 = styled.h2`
    color: #484848;
    font-size: 24px;
    font-family: 'Roboto-Bold';
    margin: 0px 0px 0px 25px;
`;

const Title = ({children}) => {
    return(
        <StyleH2>{children}</StyleH2>
    );
}

export default Title;