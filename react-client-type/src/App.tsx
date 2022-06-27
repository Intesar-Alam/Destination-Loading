import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Home from './components/Home';
import MenuBar from './components/MenuBar';
import Contact from './components/Contact';
import AboutUs from './components/AboutUs';
import LearnMore from './components/LearnMore';
import Login from './components/Login';
import NotFound from './components/NotFound';
import UserReservationList from './components/UserReservationList';
import SingleUserReservation from './components/SingleUserReservation';
import CompanyPage from './components/CompanyPage';
import CompanyReservationList from './components/CompanyReservationList';
import CompanyList from './components/CompanyList';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <BrowserRouter>
      <MenuBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/learnmore" element={<LearnMore />} />
          <Route path="/login" element={<Login />} />
          <Route path="/notfound" element={<NotFound />} />
          <Route path="/userreservationlist" element={<UserReservationList />} />
          <Route path="/singleuserreservation" element={<SingleUserReservation />} />
          <Route path="/companypage" element={<CompanyPage />} />
          <Route path="/companyreservationlist" element={<CompanyReservationList />} />
          <Route path="/companylist" element={<CompanyList />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
