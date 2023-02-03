import { Route, Routes } from 'react-router-dom';

import AboutPage from '../../pages/about';
import ContactPage from '../../pages/Contact';
import HomePage from '../../pages/home';
import KidBooksPage from '../../pages/KidBooks';
import MetMuseumPage from '../../pages/Museum';
import NasaGalleryPage from '../../pages/NasaGallery'
import NasaPage from '../../pages/Nasa';
import React from 'react';

const PageSwitch = () => (
    <Routes>
        
        <Route exact path={'/Nasa'} element={<NasaPage />}  />
        <Route exact path={'/Museum'} element={<MetMuseumPage />} />
        <Route exact path={'/KidBooks'} element={<KidBooksPage />} />
        <Route exact path={'/Contact'} element={<ContactPage />} />
        <Route exact path= {'/NasaGallery'} element={<NasaGalleryPage />} />
        <Route exact path={'/'} element={<HomePage />} />
        <Route exact path={'/about'} element={<AboutPage />} />
        
    </Routes>
);

export default PageSwitch;