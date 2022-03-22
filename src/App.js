import { Route, Routes, Navigate } from 'react-router-dom';
import './App.css';

import Navbar from './component/Navbar';

import About from './component/pages/About';
import Home from './component/pages/Home';
import User from './component/user/User';

import Login from './component/user/Login';
import Register from './component/user/Register';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/user' element={<Navigate to='/user/login' />} />
        <Route path='/user' element={<User />}>
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register />} />
        </Route>

      </Routes>
    </div>
  );
}

export default App;
