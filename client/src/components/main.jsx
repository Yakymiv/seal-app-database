import React, { Fragment } from 'react';
import Header from './header.jsx';
import MainRouter from './router/main_router.jsx';
import Footer from './footer.jsx';

const Main = () => {
    return(
        <Fragment>
            <Header />
            <MainRouter />
            <Footer />
        </Fragment>
    );
}

export default Main;