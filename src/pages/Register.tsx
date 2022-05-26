import React, { SyntheticEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Cookies } from "typescript-cookie";


const Register = () => {
    let navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const jwt = Cookies.get("jwt");
    console.log({jwtHome: jwt});

    const submit = async(e: SyntheticEvent) => {
      e.preventDefault();

      // 'https://localhost:7200/api/register'
      await fetch('https://net-api.onrender.com/register', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        credentials: 'include',
        body: JSON.stringify({
          name,
          email,
          password
        })
      });

      return navigate('/login');

    }


    return (
        <form onSubmit={submit}>
          <h1 className="h3 mb-3 fw-normal">Please register</h1>

            <input name="name" className="form-control" placeholder="Name" required
            onChange={e => setName(e.target.value)}/>

            <input name="email"type="email" className="form-control" placeholder="Email addres" required
            onChange={e => setEmail(e.target.value)}/>

            <input name="password" type="password" className="form-control" placeholder="Password" required
            onChange={e => setPassword(e.target.value)}/>

            <button className="w-100 btn btn-lg btn-primary" type="submit" >Submit</button>
        </form>
    );
};

export default Register;
