import './App.css';
import React from 'react'
import { Routes, Route } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';

function App() {
  return (
    <div className='App'>
      {<NavBar/ >}
      {/* <Routes>
        <Route element={}/>
      </Routes> */}
    </div>
  );
}

export default App;
