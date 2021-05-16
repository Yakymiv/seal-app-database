import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { addAppToMachine } from './../../actions/actionCreator.js';

const StyleSpan = styled.span`
    font-family: 'Roboto';
    font-size: 16px;
    color: #3A3A3A;
    padding: 5px 10px;
    margin: 5px 5px;
    border: 1px solid #306F7D;
    border-radius: 10px;
    transition: 0.2s linear;
    cursor: pointer;
    ::after {
        font-family: 'Font-Awesome';
        content: "\f062";
        color: #7EAFBA;
        margin-left: 5px;
        transition: 0.2s linear;
    }
    :hover {
        border-color: #7EAFBA;
        ::after {
            color: #306F7D;
        }
    }
`;

const Element = ({ selectedMachine, children, dispatch }) => {
    const handleClick = id => {
        fetch(`http://localhost:5000/sealapp?id=${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                onmachine: Number(selectedMachine)
            })
        }).then(response => {
            if (response.status === 200) dispatch(addAppToMachine(children._id, selectedMachine));
            return response.text();
        }).then(data => console.log(data));
    }
    return(
        <StyleSpan onClick={() => handleClick(children._id)}>{children.name}</StyleSpan>
    );
}

const mapStateToProps = state => {
    return { selectedMachine: state.selectedMachine }
}

export default connect(mapStateToProps)(Element);