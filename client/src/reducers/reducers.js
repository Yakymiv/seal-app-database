import { combineReducers } from 'redux';
import { ADD_MACHINES, ADD_SEAL_APPS, SELECT_MACHINE, ADD_APP_TO_MACHINE, REMOVE_SEAL_APPS_FROM_MACHINE } from './../reduxConstants.js';

const machines = (state = [], action) => {
    switch(action.type) {
        case ADD_MACHINES:
            return action.machines;
        default:
            return state;
    }
}

const sealapps = (state = [], action) => {
    switch(action.type) {
        case ADD_SEAL_APPS:
            return action.sealapps;
        case REMOVE_SEAL_APPS_FROM_MACHINE: 
            return state.filter(el => el._id !== action.id);
        case ADD_APP_TO_MACHINE: 
            return state.map(el => el._id === action.id ? el.onMachine = action.machine : el);
        default:
            return state;
    }
}

const selectedMachine = (state = "-", action) => {
    switch(action.type) {
        case SELECT_MACHINE:
            return  action.machine
        default:
            return state;
    }
}

export default combineReducers({
    machines,
    sealapps,
    selectedMachine
  })