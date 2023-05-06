import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SignUpPage from './pages/signup';
import LoginPage from './pages/login';
import Home from './pages/home';
import GroundFloor from './pages/floor/groundfloor';
import FirstFloor from './pages/floor/firstfloor';
import SecondFloor from './pages/floor/secondfloor';
import ThirdFloor from './pages/floor/thirdfloor';
import FourthFloor from './pages/floor/fourthfloor';
import FifthFloor from './pages/floor/fifthfloor';



function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/register" element={<SignUpPage />} />
        <Route exact path="/" element={<LoginPage />} />
        <Route exact path="/groundfloor" element={<GroundFloor />} />
        <Route exact path="/firstfloor" element={<FirstFloor />} />
        <Route exact path="/secondfloor" element={<SecondFloor />} />
        <Route exact path="/thirdfloor" element={<ThirdFloor />} />
        <Route exact path="/fourthfloor" element={<FourthFloor />} />
        <Route exact path="/fifthfloor" element={<FifthFloor />} />
      </Routes>
    </div>
  );
}

export default App;
