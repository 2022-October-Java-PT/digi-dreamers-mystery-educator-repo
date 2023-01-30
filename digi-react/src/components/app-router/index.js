import { Route, Routes } from 'react-router-dom';

import AboutPage from '../../pages/about';
import ContactPage from '../../pages/contact';
import HomePage from '../../pages/home';
import MetMuseumPage from '../../pages/Museum';
import NasaPage from '../../pages/Nasa';
import React from 'react';

const PageSwitch = () => (
    <Routes>
        
        <Route exact path={'/Nasa'} element={<NasaPage />}  />
        <Route exact path={'/Museum'} element={<MetMuseumPage />} />
        <Route exact path={'/'} element={<HomePage />} />
        <Route exact path={'/contact'} element={<ContactPage />} />
        <Route exact path={'/'} component={HomePage} />
        <Route exact path={'/contact'} component={ContactPage} />
        <Route exact path={'/about'} element={<AboutPage />} />
        
    </Routes>
);

export default PageSwitch;