import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { addSealapps, addMachines } from './../../actions/actionCreator.js';
import Element from './element.jsx';

const StyledSection = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 100px;
`;

const Elements = ({ dispatch, sealapps }) => {
    useEffect(() => {
        Promise.all([
            fetch('http://localhost:5000/machine').then(response => response.json()),
            fetch('http://localhost:5000/sealapp').then(response => response.json())
        ]).then(data => {
            dispatch(addMachines(data[0]));
            dispatch(addSealapps(data[1]));
        })
    }, [dispatch])
    const sealAppList = sealapps.filter(el => el.onMachine === "False");
    return(
        <StyledSection>
            {sealAppList.map(el => <Element key={el._id}>{el}</Element>)}
        </StyledSection>
    );
}

const mapStateToProps = (state) => {
    return { sealapps: state.sealapps };
}

export default connect(mapStateToProps)(Elements);