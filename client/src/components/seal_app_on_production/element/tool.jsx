import React from 'react';
import styled from 'styled-components';

const StyleSpan = styled.span`
    position: relative;
    font-family: 'Roboto';
    font-size: 16px;
    margin-right: 20px;
    color: #3A3A3A;
    cursor: pointer;
    ::before {
        position: absolute;
        bottom: 0px;
        background: #306F7D;
        width: 0px;
        height: 2px;
        content: '';
        transition: 0.3s ease-out;
    }
    ::after {
        font-family: 'Font-Awesome';
        content: "\f063";
        margin-left: 5px;
        transition: 0.2s linear;
    }
    :hover {
        ::before {
            width: 100%;
        }
        ::after {
            color: #7EAFBA;
        }
    }
`;

const Tool = ({myClick, id, children }) => {
    const handleClick = () => {
        myClick(id)
    }
    return(
        <StyleSpan onClick={handleClick}>{children}</StyleSpan>
    );
}

export default Tool;