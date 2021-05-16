import { ADD_MACHINES, SELECT_MACHINE, ADD_APP_TO_MACHINE, ADD_SEAL_APPS, REMOVE_SEAL_APPS_FROM_MACHINE } from '../reduxConstants.js';

export const addMachines = machines => {
    return {
        type: ADD_MACHINES,
        machines
    };
};

export const addSealapps = sealapps => {
    return {
        type: ADD_SEAL_APPS,
        sealapps
    }
}

export const removeSealApp = id => {
    return {
        type: REMOVE_SEAL_APPS_FROM_MACHINE,
        id
    }
}

export const addAppToMachine = (id, machine) => {
    return {
        type: ADD_APP_TO_MACHINE,
        id,
        machine
    }
}

export const changeSelectedMachine = machine => {
    return {
        type: SELECT_MACHINE,
        machine
    }
}