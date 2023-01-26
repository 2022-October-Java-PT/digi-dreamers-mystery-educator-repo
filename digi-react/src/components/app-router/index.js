import { Route, Routes } from 'react-router-dom';

import ContactPage from '../../pages/contact';
import HomePage from '../../pages/home';
import NasaPage from '../../pages/Nasa';
import React from 'react';

const PageSwitch = () => (
    <Routes>
        
        <Route exact path={'/Nasa'} element={<NasaPage />}  />
        <Route exact path={'/'} component={HomePage} />
        <Route exact path={'/contact'} component={ContactPage} />

        
    </Routes>
);

export default PageSwitch;