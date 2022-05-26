import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Home from './pages/Home';
import Insertar from './pages/Insertar';
import Login from './pages/Login';
import Register from './pages/Register';
import { ChakraProvider } from '@chakra-ui/react'
import axios from 'axios';

function App() {
  const [name, setName]= useState('');
  const baseUrl='https://net-api.onrender.com/api/user';
  // const baseUrl='https://localhost:7200/api/user';


    
  return (
    <ChakraProvider>
    <div className="App">      
      <Nav name={name} setName={setName}/>
      
      <main className="form-signin">
      <Routes>
          <Route path="/home" element={<Home />}/>   
          <Route path="/insertar" element={<Insertar />}/>      
          <Route path="/login" element={<Login/>}/> 
          <Route path="/register" element={<Register/>}/>
      </Routes> 
      </main>
      
    </div>
    </ChakraProvider>
  );
}

export default App;
