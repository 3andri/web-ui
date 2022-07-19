import logo from './logo.svg';
import './App.css';
import Header from './component/Header'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Data from './pages/Data';
import About from './pages/About';
import Contact from './pages/Contact';
import Stock from './pages/Stock';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
  <Router>
    <div className="App">
      <Header/>
      <Routes>
        <Route exact path='/' element={< Home />}></Route>
        <Route exact path='/data' element={< Data />}></Route>
        <Route exact path='/about' element={< About />}></Route>
        <Route exact path='/contact' element={< Contact />}></Route>
        <Route exact path='/stock/:data' element={< Stock />}></Route>
      </Routes>
    </div>
  </Router>
  );
}

export default App;
