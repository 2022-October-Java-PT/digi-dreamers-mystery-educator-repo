import { BrowserRouter } from 'react-router-dom';
import Footer from "./components/footer";
import Header from "./components/header";
import PageSwitch from "./components/app-router";
import style from './style.module.scss';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className={style.page}>
        <PageSwitch />
      </div> 
      <Footer />
    </BrowserRouter>
  );
}

export default App;
