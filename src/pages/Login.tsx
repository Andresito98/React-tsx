import axios from "axios";
import React, { SyntheticEvent, useState } from "react";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [data, setData]=useState([]);
    const baseUrl='http://localhost:7200/api/login';
    const [login, setLogingSeleccionado]=useState({
        email: '',
        password: ''
    })

    const handleChange=(e: { target: { name: any; value: any; }; })=>{
        const {name, value}=e.target;
        setLogingSeleccionado({
          ...login,
          [name]: value
        });
        console.log(login);
      }

    const submit = async(e: SyntheticEvent) => {
        e.preventDefault();
        // delete customerSeleccionado.id;
        await axios.post(baseUrl, login).then(response=>{
          setData(data.concat(response.data));
          //abrirCerrarModalInsertar();
        }).catch(error=>{
          console.log(error);
        })
        
        //const content = await response.json();
        //props.setName(content.name);

      }



    

      /*
    const submit = async(e: SyntheticEvent) => {
        e.preventDefault();

        const response = await fetch('http://localhost:7200/api/login', {
            method: 'POST',
            headers: {'Content-Type': 'aplication/json'},
            credentials: 'include',
            body: { email, password }

        });

        const content = await response.json();
        props.setName(content.name);
    }*/
    
    return (
        <form onSubmit={submit}>
          <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
            <input type="email" className="form-control" placeholder="name@example.com" required
                 onChange={handleChange}/>

            <input type="password" className="form-control" placeholder="Password" required
                onChange={handleChange}/>
            <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
        </form>
    );
};

export default Login;

