import axios from "axios";
import React, { SyntheticEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import swal from "sweetalert";

const Login = () => {
  let navigate = useNavigate();
  const [data, setData] = useState([]);
  const baseUrl = "https://localhost:7200/api/login";
  const [login, setLogingSeleccionado] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    console.log("name:", name, "value:", value);
    setLogingSeleccionado({
      ...login,
      [name]: value,
    });
    console.log(login);
  };

  
  const submit = async (e: SyntheticEvent) => {
    e.preventDefault();
    await axios
      .post(baseUrl, login, { withCredentials: true })
      .then((response) => {
        //setData(data.concat(response.data));
        console.log({jwt: response?.data?.jwt})
        const cookies = new Cookies        
        cookies.set("jwt",response?.data?.jwt)
        
      })
      .catch((error) => {
        console.log("Error Login incorrecto");
        swal({
          title: "Error",
          text: "Usuario o contraseña incorrecto",
          icon: "error",
        });        
      });
    return navigate("/login");
  };
  

  return (
    <form onSubmit={submit}>
      <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
      <input
        name="email"
        type="email"
        className="form-control"
        placeholder="Email"
        required
        onChange={handleChange}
      />

      <input
        name="password"
        type="password"
        className="form-control"
        placeholder="Password"
        required
        onChange={handleChange}
      />
      <button className="w-100 btn btn-lg btn-primary" type="submit">
        Sign in
      </button>
    </form>
  );
};

export default Login;
