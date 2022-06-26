import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Home from './components/Home';
import Contact from './components/Contact';
import AboutUs from './components/AboutUs';
import LearnMore from './components/LearnMore';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Menu from './components/Menu';
import NotFound from './components/NotFound';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/learnmore" element={<LearnMore />} />
          <Route path="/login" element={<Login />} />
          <Route path="/navbar" element={<Navbar />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/notfound" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;