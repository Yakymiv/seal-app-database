import React from 'react';
import styled from 'styled-components';

const StyleHeader = styled.header`
    width: 100%;
    height: 50px;
    background: #EBEBEB;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.17);
    div {
        display: flex;
        align-items: center;
        height: 100%;
        h2, p {
            font-family: 'Roboto-Bold';
            margin: 0px;
            color: #7EAFBA;
        }
        h2 {
            font-size: 24px;
            margin-left: 25px;
        }
        p {
            font-size: 13px;
            margin-left: 5px;
        }
    }
`;

const Header = () => {
    return(
        <StyleHeader><div><h2>Seal applicator database</h2><p>beta</p></div></StyleHeader>
    );
}

export default Header;