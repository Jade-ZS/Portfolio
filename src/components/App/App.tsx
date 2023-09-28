import './App.css';
import React, {useState} from 'react'
import { Routes, Route } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import Home from '../Home/Home';
import Portfolio from '../Portfolio/Portfolio';
import Story from '../Story/Story';
import ScrollToHashElement from "../ScrollToHashElement";

function App() {
  const [show, setShow] = useState(false);

  return (
    <div className='App'>
      {/* <ScrollToHashElement show={show}/>
      <NavBar show={show} setShow={setShow}/> */}
      <Home />
      <Routes>
        <Route path='/' element={<Portfolio />}/>
      </Routes>
    </div>
  );
}

export default App;
