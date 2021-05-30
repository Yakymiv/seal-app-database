import React from 'react';
import styled from 'styled-components';

const StyleFooter = styled.footer`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    background-color: #353535;
    width: 100%;
    height: 50px;
    margin-top: 50px;
    span {
        color: #aaa;
        font-family: 'Roboto';
        font-size: 12px;
        margin: 5px 25px;
    }
`;

const Footer = () => {
    return(
        <StyleFooter id="footer">
            <span>by Yakymiv Yaroslav</span>
        </StyleFooter>
    );
}

export default Footer;