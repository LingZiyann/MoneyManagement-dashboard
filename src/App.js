import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home/Home';
import MySidebar from './Sidebar/Sidebar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Transactions from './Pages/Transactions/Transactions';
import ExpensesPlanner from './Pages/ExpensesPlanner/ExpensesPlanner';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MySidebar></MySidebar>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/Home" element={<Home/>}></Route>
          <Route path='/Transactions' element={<Transactions/>}></Route>
          <Route path='/ExpensesPlanner' element={<ExpensesPlanner/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
