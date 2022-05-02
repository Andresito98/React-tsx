import React, { SyntheticEvent, useState } from "react";
//import { useNavigate } from "react-router-dom";


const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    //const [redirect, setRedirect] = useState(true);
    //const navigate = useNavigate();

    const submit = async(e: SyntheticEvent) => {
        e.preventDefault();

        await fetch('http://localhost:7200/api/register', {
            method: 'POST',
            headers: {'Content-Type': 'aplication/json'},
            body: JSON.stringify({
                name,
                email,
                password
            })
        });

        

        
        /* Esto es para ver lo que sale por console
        const response = 
        const content = await response.json();
        console.log(content);*/
    }


    
    /*if(redirect){
        return <Navigate to="/login" replace={true} />
        //return <Navigate to="/login"/>;
    }*/
    // <Route path="/register" element={<Navigate replace to={"/login"}/>}/>
    

    return (
        <form onSubmit={submit}>
          <h1 className="h3 mb-3 fw-normal">Please register</h1>

            <input className="form-control" placeholder="Name" required
                onChange={e => setName(e.target.value)}/>

            <input type="email" className="form-control" placeholder="Email addres" required
                onChange={e => setEmail(e.target.value)}/>

            <input type="password" className="form-control" placeholder="Password" required
                onChange={e => setPassword(e.target.value)}/>

            <button className="w-100 btn btn-lg btn-primary" type="submit">Submit</button>
        </form>
    );
};

export default Register;

// 1:13 conectar con backend