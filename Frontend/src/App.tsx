
import { Routes, Route, useNavigate, BrowserRouter } from "react-router-dom";
import './App.css';
import Home from './Pages/Home/Home';
import MySidebar from './Components/Sidebar/Sidebar'
import Transactions from './Pages/Transactions/Transactions';
import Balance from './Pages/Balance/Balance';
import Planner from './Pages/Planner/Planner';
import SignUp from './users/SignUp';
import { AuthContext } from './context/auth-context';
import { useCallback, useEffect, useState } from 'react';
import Login from './users/Login';

let logoutTimer:number;

function App() {
  const [token, setToken] = useState<string|null>(null);
  const [tokenExpirationDate, setTokenExpirationDate] = useState<Date|null>(null);
  const [userId, setUserId] = useState<string|null>(null);

  const login = useCallback((uid: string, token: string, expirationDate: Date) => {
    setToken(token);
    setUserId(uid);
    const tokenExpirationDate =
      expirationDate || new Date(new Date().getTime() + 1000 * 60 * 60 * 100);
    setTokenExpirationDate(tokenExpirationDate);
    localStorage.setItem('userId', uid);
    localStorage.setItem('token', token);
    localStorage.setItem('expiration', tokenExpirationDate.toISOString());

  }, []);

  const logout = useCallback(() => {
    setToken(null);
    setTokenExpirationDate(null);
    setUserId(null);
    localStorage.removeItem('token');
    localStorage.removeItem('expiration');
    localStorage.removeItem('userId');
  }, []);

  useEffect(() => {
    if (token && tokenExpirationDate) {
      const remainingTime = tokenExpirationDate.getTime() - new Date().getTime();
      logoutTimer = window.setTimeout(logout, remainingTime);
    } else {
      clearTimeout(logoutTimer);
    }
  }, [token, logout, tokenExpirationDate]);

  useEffect(() => {
    const myUid = localStorage.getItem('userId');
    const myToken = localStorage.getItem('token');
    const myExpiration = localStorage.getItem('expiration');
    if (
      myUid &&
      myToken && myExpiration &&
      new Date(myExpiration) > new Date()
    ) {
      login(myUid, myToken, new Date(myExpiration));
    }
  }, [login]);

  let routes;


  if (token) {
    routes = (
      <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="*" element={<Home/>}></Route>
          <Route path="/Home" element={<Home/>}></Route>
          <Route path='/Transactions' element={<Transactions/>}></Route>
          <Route path='/Balance' element={<Balance/>}></Route>
          <Route path='/Planner' element={<Planner/>}></Route>
      </Routes>
    )
  } else {
    routes = (
      <Routes>
          <Route path='*' element={<SignUp/>}></Route>
          <Route path='/signup' element={<SignUp/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
      </Routes>
    )
  }

  return (
    <div className="App">
      <AuthContext.Provider value={{isLoggedIn:false, userId: userId, token: token, login: login, logout: logout}}>
        <BrowserRouter basename='/MoneyManagement-dashboard'>
          {token && <MySidebar></MySidebar>}
          {routes}
        </BrowserRouter>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
