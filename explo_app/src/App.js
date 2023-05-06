import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SignUpPage from './pages/signup';
import LoginPage from './pages/login';
import Home from './pages/home';
import Floor from './pages/appliances/floor';
import Heavy from './pages/appliances/heavy';
import Remote from './pages/appliances/remote';
import Security from './pages/appliances/security';
import Virtual from './pages/appliances/virtual';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/register" element={<SignUpPage />} />
        <Route exact path="/" element={<LoginPage />} />
        <Route exact path="/floor-activities" element={<Floor />} />
        <Route exact path="/remote" element={<Remote />} />
        <Route exact path="/heavy-appliances" element={<Heavy />} />
        <Route exact path="/security-appliances" element={<Security />} />
        <Route exact path="/virtual-appliances" element={<Virtual />} />
      </Routes>
    </div>
  );
}

export default App;
