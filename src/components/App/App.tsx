import './App.css';
import React from 'react'
import { Routes, Route } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import Home from '../Home/Home';
import Portfolio from '../Portfolio/Portfolio';
import Story from '../Story/Story';

function App() {
  return (
    <div className='App'>
      {<NavBar/ >}
      <Routes>
        <Route path='/'>
          <Route  index element={<Home/>}/>
          <Route path='portfolio' element={<Portfolio />}/>
          <Route path='story' element={<Story />}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
