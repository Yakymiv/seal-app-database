import React from 'react';
import MainHeader from '../general/header.jsx';
import Element from './element/main_element.jsx';

const SealAppOnProduction = () => {
    return(
        <main>
            <MainHeader logo={'\f062'} text={'Send'} color={'#306F7D'} refs={"/SealApps"}>Seal applicator on production</MainHeader>
            <Element />
        </main>
        
    );
}

export default SealAppOnProduction;