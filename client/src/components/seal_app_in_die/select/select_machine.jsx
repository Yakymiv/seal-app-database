import React, { useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { changeSelectedMachine } from './../../../actions/actionCreator.js';

const StyleSection = styled.section`
    margin: 0px 25px;
    p {
        display: inline-block;
        font-size: 16px;
        font-family: 'Roboto-Bold';
        color: #3A3A3A;
        margin-right: 5px;
    }
    select {
        border: 1px solid #7EAFBA;
        width: 50px;
        height: 20px;
        margin-left: 5px;
        outline: none;
        font-size: 14px;
        font-family: 'Roboto';
        option {
            color: #3A3A3A;
        }
    }
`;

const SelectMachine = ({ machines, selectedMachine, dispatch }) => {
    useEffect(() => {
        return () => {
            dispatch(changeSelectedMachine('-'));
        }
    })
    const machineList = machines.map(element => element.number)
    machineList.unshift('-');
    const handleChange = e => {
        dispatch(changeSelectedMachine(e.target.value))
    }
    return(
        <StyleSection>
            <p>Select machine</p>
            <select value={selectedMachine} onChange={handleChange}>
               { machineList.map(element => <option key={element}>{element}</option>) }
            </select>
        </StyleSection>

    );
}

const mapStateToProps = state => {
    return { machines: state.machines }
}

export default connect(mapStateToProps)(SelectMachine);