import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyleDiv = styled.div`
    position: relative;
    color: ${props => props.color};
    margin: 0px 25px 0px 0px;
    a {
        text-decoration: none;
        color: inherit;
    }
    cursor: pointer;
    :hover {
        span {
            ::after {
                width: 100%;
            }
        }
    }
`;

const StyleTextSpan = styled.span`
    font-family: 'Roboto-Bold';
    font-size: 24px;
    ::before {
        font-family: 'Font-Awesome';
        font-size: 20px;
        margin-right: 5px;
        content: '${props => props.logo}'
    }
    ::after {
        position: absolute;
        bottom: 0px;
        right: 0px;
        background: ${props => props.color};
        width: 50px;
        height: 2px;
        content: '';
        transition: 0.5s ease-out;
    }
`;

const TopRef = ({myLogo, myText, myColor, myRefs}) => {
    return(
        <StyleDiv color={myColor}>
            <Link to={myRefs}><StyleTextSpan logo={myLogo} color={myColor}>{myText}</StyleTextSpan></Link>
        </StyleDiv>
    );
}

export default TopRef;