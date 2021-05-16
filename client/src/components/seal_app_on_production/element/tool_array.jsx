import React from 'react';
import Tool from './tool.jsx'
import styled from 'styled-components';
import { connect } from 'react-redux';
import { removeSealApp } from './../../../actions/actionCreator.js';

const StyledDiv = styled.div`
    display: flex;
    margin: 0px 10px;
    overflow: auto;
`;

const ArrayTool = ({ sealapps, machine, dispatch }) => {
    const handleClick = (id) => {
        fetch(`http://localhost:5000/sealapp?id=${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                onmachine: 'False'
            })
        }).then(response => {
            dispatch(removeSealApp(id));
            return response.text()
        }).then(data => {
            console.log(data);
        })
    }
    const filter = sealapps.filter(element => (Number(element.onMachine) === Number(machine)));
    return(
        <StyledDiv>
            {filter.map(element => <Tool key={element._id} id={element._id} myClick={handleClick}>{element.name}</Tool>)}
        </StyledDiv>
    );
}

const mapStateToProps = state => {
    return { sealapps: state.sealapps }
}

export default connect(mapStateToProps)(ArrayTool);