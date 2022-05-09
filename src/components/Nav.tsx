import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";

const Nav = (props: {name: string, setName: (name:string) => void}) => {
  const baseUrl='https://localhost:7200/api/logout';

  const logout = async() => {
    axios({
      method: 'post',
      url: baseUrl,
      headers: {'Content-Type': 'application/json'},
      withCredentials: true,
    })
    props.setName('');
  }

  let menu;

  if(props.name === ''){
    menu = (
          <ul className="navbar-nav me-auto mb-2 mb-md-0">
              <li className="nav-item active">
                <Link to="/login" className="nav-link">Login</Link>
              </li>
              <li className="nav-item active">
                <Link to="/register" className="nav-link">Register</Link>
              </li>
              <li className="nav-item active">
                <Link to="/login" className="nav-link" onClick={logout}>Logout</Link>
              </li>
          </ul>
    )
  }else{
    menu = (
      <ul className="navbar-nav me-auto mb-2 mb-md-0">
              <li className="nav-item active">
                <Link to="/login" className="nav-link" onClick={logout}>Logout</Link>
              </li>
              <li className="nav-item active">
              <Link to="/insertar" className="nav-link">Insertar2</Link>
              </li>
          </ul>
    )
           
  }



    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
        <div className="container-fluid">
          <Link to="/home" className="navbar-brand">Home</Link>

          <div className="container-fluid">
          <Link to="/insertar" className="navbar-brand">Insertar</Link>
          </div>

          <div>
          {menu}
          </div>
        </div>
      </nav>
    );
};

export default Nav;