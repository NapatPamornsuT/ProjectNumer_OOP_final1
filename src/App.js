import logo from './logo.svg';
import { NavBar } from './NavBar';
import './App.css';
import Bisection from './Element/Bisection';
import False from './Element/False';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Onepoint from './Element/Onepoint';
import Newton from './Element/Newton';
import Secant from './Element/Secant';
import New from './Element/New';
import Home from './Home';


function App() {
  return (
    <div className="App">
        <BrowserRouter >
        <NavBar/>
        <Routes>
          <Route path="/Bisection" element={<Bisection/>} />
          <Route path="/False" element={<False/>} />
          <Route path="/Onepoint" element={<Onepoint/>} />
          <Route path="/Newton" element={<Newton/>} />
          <Route path="/Secant" element={<Secant/>} />
          <Route path="/New" element={<New/>} />
          <Route path="/" element={<Home/>} />
          <Route path="/Home" element={<Home/>} />

        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;