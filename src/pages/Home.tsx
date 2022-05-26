import axios from "axios";
import React, { SyntheticEvent, useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import {
    Stack,
    Text
  } from '@chakra-ui/react'
import { Cookies } from "typescript-cookie";

const Home = () => {  
    let navigate = useNavigate();
    const baseUrl='https://net-api.onrender.com/user';
    // const baseUrl='https://localhost:7200/api/user';
    const [users, setUsers]=useState<any>();

    const jwt = Cookies.get("jwt");
    //console.log({jwtHome: jwt});
    console.log(jwt);


    const prueba = async(e: SyntheticEvent) => {
        e.preventDefault();
        axios({
            method: 'get',
            url: baseUrl,
            headers: {'Content-Type': 'application/json'},
            withCredentials: true,
            data: {
                name: ''
            }
        }).catch(error=>{
          console.log("Error Register ")
        })

        return navigate('/login');

      }

      // El problema que me salga un 401 es que sigue sin coger la cookie.

      const submit2 = async () => {      

        // 'https://localhost:7200/api/user'
        await fetch('https://net-api.onrender.com/user', {
          method: 'GET',
          headers: {'Content-Type': 'application/json'},
          credentials: 'include'
        }).then((response: any) => {
            response.json()
        }).then((users: any) => setUsers(users));
    
        return navigate('/home');
  
      }

      // 'https://localhost:7200/api/user'
      useEffect(() => {
        fetch('https://net-api.onrender.com/user')
        .then((response) => response.json())
        .then((json) => setUsers(json));
      },[]);


    // onSubmit={prueba}
    return (
        <form>
            <Stack pos="absolute" top="145" left="400px" >
                <Text fontSize='3xl' fontWeight="bold">Bienvenido a la API FULLSTACK de Andrés Retamal López </Text>
                <Text fontSize='3xl' fontWeight="bold"> - Donde he usado las tecnologias .NET y REACT/TYPYESCRIPT</Text>
                <Text fontSize='3xl' fontWeight="bold"> - Registrate y espero que disfrutes de esta api corta pero funcional</Text>
                <Text fontSize='3xl' fontWeight="bold"> Un saludo</Text>
            </Stack>
            <Stack pos="absolute" top="160" left="1220px" >
                <Text fontSize='1xl' color="#DFDFDE" fontWeight="bold">(Mi api, por si no te has enterado -_-)</Text>
            </Stack>
          
        </form>
        
    );
};

export default Home;