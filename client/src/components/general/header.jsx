import React from 'react';
import styled from 'styled-components';
import Title from './header_title';
import TopRef from './header_top_ref';


const StyleSection = styled.section`
    display: flex;
    height: 60px;
    justify-content: space-between;
    align-items: center;

`;

const MainHeader = ({logo, text, color, refs, children}) => {
    return(
        <StyleSection>
            <Title>{children}</Title>
            <TopRef myLogo={logo} myText={text} myColor={color} myRefs={refs}/>
        </StyleSection>
    );
}

export default MainHeader;