import { Route, Routes } from 'react-router-dom';

import ContactPage from '../../pages/contact';
import HomePage from '../../pages/home';
import MetMuseumPage from '../../pages/Museum';
import NasaPage from '../../pages/Nasa';

const PageSwitch = () => (
    <Routes>
        
        <Route exact path={'/Nasa'} element={<NasaPage />}  />
        <Route exact path={'/Museum'} element={<MetMuseumPage />} />
        <Route exact path={'/'} element={<HomePage />} />
        <Route exact path={'/contact'} element={<ContactPage />} />
        
    </Routes>
);

export default PageSwitch;