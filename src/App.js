import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom';
import Navbar from './componets/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Dashboard from './pages/Dashboard'
import './App.css';

function App() {
  return (
    <>
      <Router>
        <header>
        </header>
        <div className='main'>
          <Navbar/>
          <div className='rightbody'>
            <Routes>
              <Route path='/'  element={<Home />}/>
              <Route path='/about'  element={<About />}/>
              <Route path='/dashboard'  element={<Dashboard />}/>
            </Routes>
          </div>
        </div>
       </Router>
    </>
  )
}

export default App;
