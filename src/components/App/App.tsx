import './App.css';
import React from 'react'
import { Routes, Route } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import Home from '../Home/Home';

function App() {
  return (
    <div className='App'>
      {<NavBar/ >}
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
