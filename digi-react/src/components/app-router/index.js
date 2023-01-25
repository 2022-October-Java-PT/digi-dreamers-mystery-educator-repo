import { Route, Routes } from 'react-router-dom';

import NasaPage from '../../pages/Nasa';

const PageSwitch = () => (
    <Routes>
        
        <Route exact path={'/Nasa'} element={<NasaPage />}  />
        
    </Routes>
);

export default PageSwitch;