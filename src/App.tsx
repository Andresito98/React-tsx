import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
    
  return (
    <div className="App">      
      <Nav/>
      
      <main className="form-signin">
      <Routes>
          <Route path="/" element={<Home/>}/>        
          <Route path="/login" element={<Login/>}/> 
          <Route path="/register" element={<Register/>}/>
      </Routes> 
      </main>
      
    </div>
  );
}

export default App;
