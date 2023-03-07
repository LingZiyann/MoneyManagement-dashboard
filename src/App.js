import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './Pages/Home/Home';
import MySidebar from './Sidebar/Sidebar';
import Transactions from './Pages/Transactions/Transactions';
import Balance from './Pages/Balance/Balance';
import Planner from './Pages/Planner/Planner';

function App() {
  return (
    <div className="App">
      <BrowserRouter basename='/MoneyManagement-dashboard'>
        <MySidebar></MySidebar>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
        
          <Route path="/Home" element={<Home/>}></Route>
          <Route path='/Transactions' element={<Transactions/>}></Route>
          <Route path='/Balance' element={<Balance/>}></Route>
          <Route path='/Planner' element={<Planner/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
