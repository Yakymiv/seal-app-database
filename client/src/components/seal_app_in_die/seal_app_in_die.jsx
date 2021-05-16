import React from 'react';
import MainHeader from '../general/header.jsx';
import Elements from './elements.jsx';
import SelectMachines from './select/select_machine.jsx';

const SealAppInDie = () => {
    return(
        <main>
            <MainHeader logo={'\f00d'} text={'Close'} color={'#FF4444'} refs={"/"}>Seal applicator in DIE center</MainHeader>
            <SelectMachines />
            <Elements />
        </main>
    );
};

export default SealAppInDie;