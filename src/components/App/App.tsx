import './App.css';
import React, {useState} from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from '../Home/Home';
import Portfolio from '../Portfolio/Portfolio';

function App() {

  return (
    <div className='App'>
      <Home />
      <Routes>
        <Route path='/' element={<Portfolio />}/>
      </Routes>
    </div>
  );
}

export default App;
