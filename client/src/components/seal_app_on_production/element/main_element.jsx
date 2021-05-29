import React, { useEffect } from 'react';
import styled from 'styled-components';
import ArrayTool from './tool_array.jsx';
import MachineNumber from './machine_number.jsx';
import Marker from './marker.jsx';
import { connect } from 'react-redux';
import { addMachines, addSealapps } from './../../../actions/actionCreator.js';

const StyleArticle = styled.article`
    position: relative;
    display: flex;
    height: 40px;
    align-items: center;
    border: 1px solid #2B2B2B;
    margin: 10px 25px 10px 25px;
    border-radius: 0px 40px 40px 0px;
`;

const Element = ({machines, dispatch}) => {
    useEffect(() => {
        Promise.all([
            fetch('/machine').then(response => response.json()),
            fetch('/sealapp').then(response => response.json())
        ]).then(data => {
            dispatch(addMachines(data[0]));
            dispatch(addSealapps(data[1]));
        })
    }, [dispatch])
    return(
        <section>
            {
                machines.map(machine => 
                    <StyleArticle key={machine.number}>
                        <MachineNumber machine={machine.type}>{machine.number}</MachineNumber>
                        <Marker>{machine.type}</Marker>
                        <ArrayTool machine={machine.number}/>
                    </StyleArticle>
                )
            }
        </section>
    );
}

const mapStateToProps = state => {
    return { machines: state.machines };
}

export default connect(mapStateToProps)(Element);