import { Fragment } from 'react';
import AppStyle from './App.module.scss';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Contacts from './pages/Contacts';
import { TypeAnimation } from 'react-type-animation';

const App = () => {
  return (
    <Fragment>
      <header className={AppStyle['header']}>
        <TypeAnimation
          sequence={[`"YIK OTA YEM" KOMBIKORM`, 1000000]}
          className={AppStyle['title-1']}
          wrapper="h2"
          repeat={Infinity}
        />

        <TypeAnimation
          sequence={[
            `broyler, tuhum yonalishidagi tovuqlar, bedana, yirik va mayda shohli chorva, quyon, ot, baliq uchun yuqori samarali omuhta yemlarini ishlab chiqazamiz`,
            1000,
          ]}
          className={AppStyle['subtitle']}
          wrapper="p"
          repeat={Infinity}
        />

        <nav className={AppStyle['header-menu']}>
         <button className={AppStyle['button']}><Link to={'/portfolio'}>Биз хакимизда</Link></button> 
        <button className={AppStyle['button']}> <Link to={'/portfolio/Services'}>Махсулот</Link></button> 
           <button className={AppStyle['button']}><Link to={'/portfolio/portfolio'}>Локация</Link></button> 
      <button className={AppStyle['button']}><Link to={'/portfolio/Contacts'}>Богланиш</Link></button>
        </nav>
      </header>

      <main className={AppStyle['main']}>
        <Routes>
          <Route path="/portfolio" index element={<Home />} />

          <Route path="/portfolio/Services" element={<Services />} />

          <Route path="/portfolio/portfolio" element={<Portfolio />} />

          <Route path="/portfolio/Contacts" element={<Contacts />} />
        </Routes>
      </main>

      <footer className={AppStyle['footer']}>&copy; 2025 YIK OTA YEM</footer>
    </Fragment>
  );
};

export default App;
