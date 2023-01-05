import logo from './logo.svg';
import './App.css';
import Home from './Home/Home';
import MySidebar from './Sidebar/Sidebar';

function App() {
  return (
    <div className="App">
        <MySidebar></MySidebar>
        <Home></Home>
    </div>
  );
}

export default App;
