import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SealAppOnProduction from '../seal_app_on_production/seal_app_on_production.jsx';
import SealAppInDie from '../seal_app_in_die/seal_app_in_die.jsx';

const MainRouter = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={SealAppOnProduction} />
                <Route path='/SealApps' component={SealAppInDie} />
                <Route path="" component={SealAppOnProduction} />
            </Switch>
        </BrowserRouter>
    );
};

export default MainRouter;