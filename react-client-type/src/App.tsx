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
          <Route path="/footer" element={<Footer />} />
          <Route path="/notfound" element={<NotFound />} />
          <Route path="/userreservationlist" element={<UserReservationList />} />
          <Route path="/singleuserreservation" element={<SingleUserReservation />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
