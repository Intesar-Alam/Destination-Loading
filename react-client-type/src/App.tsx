import { useState, useEffect, useContext } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import jwt_decode from 'jwt-decode';

import Home from './components/Home';
import MenuBar from './components/MenuBar';
import Contact from './components/Contact';
import ContactSubmitConfirm from './components/ContactSubmitConfirm';
import LearnMore from './components/LearnMore';
import Login from './components/Login';
import NewUserLogin from './components/NewUserLogin';
import NotFound from './components/NotFound';
import UserAddForm from './components/UserAddForm';
import UserUpdateForm from './components/UserUpdateForm';
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
import UnderConstruction from './components/UnderConstruction';
import Footer from './components/Footer';

import AuthContext, { AuthObj } from './AuthContext';
import Forbidden from './components/Forbidden';

 const DL_TOKEN_KEY = 'dlToken';
export interface DecodedToken {
  iss: string;
  sub: string;
  authorities: string;
  appUserId: number;
  companyId: number;
  exp: number;
}

export interface User {
  appUserId: number;
  companyId: number;
  username: string;
  roles: string[];
  token: string;
  hasRole: (role: string) => boolean;
}

function App() {
  const [user, setUser] = useState<User | null>(null);

  const [restoreLoginAttemptCompleted, setRestoreLoginAttemptCompleted] = useState(false);

  const authorization = useContext(AuthContext);
  
  useEffect(() => {
    const token = localStorage.getItem(DL_TOKEN_KEY);
    if(token) {
      login(token);
    }
    setRestoreLoginAttemptCompleted(true);
  }, []);

  const login = (token: string) => {
    localStorage.setItem(DL_TOKEN_KEY, token);

    const { sub: username, authorities, appUserId, companyId } = jwt_decode(token) as DecodedToken;

    const roles = authorities.split(',');

    const userToLogin: User = {
      appUserId,
      companyId,
      username,
      roles,
      token,
      hasRole(role: string) {
        return this.roles.includes(role);
      }
    };

    setUser(userToLogin);
  }

  const logout = () => {
    setUser(null);
    localStorage.removeItem(DL_TOKEN_KEY);
  };

const auth = {
  user,
  login,
  logout
};


  if(!restoreLoginAttemptCompleted) {
    return null;
  }
   
  return (
    <>
    <AuthContext.Provider value={auth}>

      <BrowserRouter>
      <MenuBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/contactsubmitconfirm" element={<ContactSubmitConfirm />} />
          <Route path="/learnmore" element={<LearnMore />} />
          <Route path="/login" element={<Login />} />          
          <Route path="/newuserlogin" element={<NewUserLogin />} />
          <Route path="/notfound" element={<NotFound />} />
          <Route path="/useraddform" element={<UserAddForm />} />
          <Route path="/userupdateform/" element={<UserAddForm />} />
          <Route path="/userupdateform/:id" element={<UserUpdateForm />} />
          <Route path="/reservationaddform" element={<ReservationAddForm />} />
          <Route path="/reservationupdateform/:id" element={<ReservationUpdateForm />} />
          <Route path="/userreservationlist" element={<UserReservationList />} />
          <Route path="/singleuserreservation/:id" element={<SingleUserReservation />} />
          <Route path="/companypage/:id" element={<CompanyPage />} />
          <Route path="/companyreservationlist/:id" element={<CompanyReservationList />} />
          <Route path="/company/:id" element={<CompanyUpdateForm />} />
          <Route path="/adminpage" element={<AdminPage />} />
          <Route path="/company" element={<CompanyAddForm />} />
          <Route path="/userlist" element={<UserList />} />
          <Route path="/reservationlist" element={<ReservationList />} />
          <Route path="/companylist" element={<CompanyList />} />
          <Route path="/underconstruction" element={<UnderConstruction />} />
          <Route path ="/forbidden" element={<Forbidden />}></Route>
          <Route path ="/*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>

      </AuthContext.Provider>
    </>
  );
}

export default App;
