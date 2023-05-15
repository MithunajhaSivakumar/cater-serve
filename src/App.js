import './App.css';
import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './Pages/Home/Home'
import Caterings from './Pages/CateringFilter/Caterings';
import Contact from './Pages/Contact/Contact';
import UserLogin from './Pages/UserLogin/UserLogin';
import Registration from './Pages/Registration/Registration';
import CateringProfile from './Pages/CateringProfile/CateringProfile';
import CateringOrder from './Pages/CateringOrder/CateringOrder';
import AdminOrder from './Pages/AdminOrder/AdminOrder';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path='/caterings' element={<Caterings/>} />
            <Route path='/contact' element={<Contact/>} />
            <Route path="/login" element={<UserLogin/>} />
            <Route path="/register" element={<Registration />} />
            <Route path="/catering-profile" element={<CateringProfile />} />
            <Route path="/catering-order" element={<CateringOrder />} />
            <Route path="/admin-order" element={<AdminOrder />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
