import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  /*const [name, setName] = useState('');

    useEffect(() => {
        (
            async () => {
                const response = await fetch('http://localhost:7200/api/user', {
                    headers: {'Content-Type': 'aplication/json'},
                    credentials: 'include',
            });
            
            const content = await response.json();

            setName(content.name);
            }
        )();
    });*/
    
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

/*
        <Route path="/" element={() => <Home name={name}/>}/>          
        <Route path="/login" element={() => <Login setName={}={setName}/>}/>
        <Nav name={name} setName={setName}/> */

// Parte 1 en el <main>
// Parte 2 en el
// <Route path="/login" element={<Login/>}/> --> No da problema en la ruta
//<Route path="/" exact element={<Home/>}/>
//<Route path="/register" element={<Register/>}/>