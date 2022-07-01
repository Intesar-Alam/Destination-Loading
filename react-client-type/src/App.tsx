import React from 'react';
import { BrowserRouter, Routes, Route, Link, useRoutes } from 'react-router-dom';

import Home from './components/Home';
import MenuBar from './components/MenuBar';
import Contact from './components/Contact';
import ContactSubmitConfirm from './components/ContactSubmitConfirm';
import LearnMore from './components/LearnMore';
import Login from './components/Login';
import NotFound from './components/NotFound';
import UserForm from './components/UserForm';
import ReservationAddForm from './components/ReservationAddForm';
import ReservationUpdateForm from './components/ReservationUpdateForm';
import UserReservationList from './components/UserReservationList';
import SingleUserReservation from './components/SingleUserReservation';
import CompanyPage from './components/CompanyPage';
import CompanyReservationList from './components/CompanyReservationList';
import CompanyUpdateForm from './components/CompanyUpdateForm';
import AdminPage from './components/AdminPage';
import CompanyAddForm from './components/CompanyAddForm';
import UserList from './components/UserList';
import ReservationList from './components/ReservationList';
import CompanyList from './components/CompanyList';
import SiteAnalytics from './components/SiteAnalytics';
import Footer from './components/Footer';


// const CompanyRoutes = () => {
//   let routes = useRoutes([
//     { path: "/company", element: <CompanyForm />},
//     { path: "/company/:id", element: <CompanyForm />}
//   ]);
//   return routes;
// }

function App() {
  return (
    <>
      <BrowserRouter>
      <MenuBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/contactsubmitconfirm" element={<ContactSubmitConfirm />} />
          <Route path="/learnmore" element={<LearnMore />} />
          <Route path="/login" element={<Login />} />
          <Route path="/notfound" element={<NotFound />} />
          <Route path="/userform" element={<UserForm />} />
          <Route path="/reservationaddform" element={<ReservationAddForm />} />
          <Route path="/reservationupdateform" element={<ReservationUpdateForm />} />
          <Route path="/userreservationlist/:id" element={<UserReservationList />} />
          <Route path="/singleuserreservation/:id" element={<SingleUserReservation />} />
          <Route path="/companypage/:id" element={<CompanyPage />} />
          <Route path="/companyreservationlist/:id" element={<CompanyReservationList />} />
          <Route path="/company/:id" element={<CompanyUpdateForm />} />
          <Route path="/adminpage" element={<AdminPage />} />
          <Route path="/company" element={<CompanyAddForm />} />
          <Route path="/userlist" element={<UserList />} />
          <Route path="/reservationlist" element={<ReservationList />} />
          <Route path="/companylist" element={<CompanyList />} />
          <Route path="/siteanalytics" element={<SiteAnalytics />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
