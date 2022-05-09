import axios from "axios";
import React, { SyntheticEvent} from "react";
import { useNavigate } from "react-router-dom";
import {
    Stack,
    Text
  } from '@chakra-ui/react'

const Home = () => {  
    let navigate = useNavigate();
    const baseUrl='https://localhost:7200/api/user';


     
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


    return (
        <form onSubmit={prueba}>
            <Stack pos="absolute" top="145" left="400px" >
                <Text fontSize='3xl' fontWeight="bold">Bienvenido a la API FULLSTACK de Andrés Retamal López </Text>
                <Text fontSize='3xl' fontWeight="bold"> - Donde he usado las tecnologias .NET y REACT/TYPYESCRIPT</Text>
                <Text fontSize='3xl' fontWeight="bold"> - Registrate y espero que disfrutes de esta api corta pero funcional</Text>
                <Text fontSize='3xl' fontWeight="bold"> Un saludo maquina</Text>
            </Stack>
            <Stack pos="absolute" top="160" left="1220px" >
                <Text fontSize='1xl' color="#DFDFDE" fontWeight="bold">(Mi api, por si no te has enterado -_-)</Text>
            </Stack>
          
        </form>
        
    );
};

export default Home;