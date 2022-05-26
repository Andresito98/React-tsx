import React, { useEffect, useState } from "react";
import {
    Stack,
    Table,
    Thead,
    Tbody,
    Text,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Input,
    Button,
    useDisclosure,
  } from '@chakra-ui/react'

  import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
  } from '@chakra-ui/react'
import { useNavigate } from "react-router-dom";
import { Cookies } from "typescript-cookie";



const Insertar = () => {
    const jwt = Cookies.get("jwt");
    //console.log({jwtHome: jwt});
    
    const { isOpen, onOpen, onClose } = useDisclosure()

    let navigate = useNavigate();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [technologies, setTechnologies] = useState('');   
    const [candidatos, setCandidatos]=useState<any>();


    const [search, setSearch] = useState('');

    // Metodo de busqueda y filtrado
    const searcher = (e: { target: { value: React.SetStateAction<string>; }; }) => {
        setSearch(e.target.value)
        console.log(e.target.value)
    }

    let resultss = []
    
    useEffect(() => {
      if(search === '') resultss = candidatos;
      else{
          console.log()
        resultss = candidatos?.filter((dato: { name: string; }) =>
        dato.name.includes(search)
        )
    }
    }, [search])
    
    /*
    if(!search){
        resultss = candidatos
    }else{
        resultss = candidatos?.filter((dato: { name: string; }) =>
        dato.name.toString().toLowerCase().includes(search.toLocaleLowerCase())
        )
        //.toLowerCase().includes(search.toLocaleLowerCase())
    }*/
// 18.16

/*
useEffect(() => {
        fetch('https://localhost:7200/api/candidato')
        .then((response) => response.json())
        .then((json) => setCandidatos(json));
      },[]);

*/




    const submit = async () => {      

        // 'https://localhost:7200/api/candidato'
      await fetch('https://net-api.onrender.com/candidato', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        credentials: 'include',
        body: JSON.stringify({
          firstName,
          lastName,
          city,
          country,
          phone,
          email,
          technologies,
          jwt
        })
      }).then((response: any) => {
        submit2();
        console.log(candidatos)
    })
      //.then((res: any) => console.log(res)).catch((err: any) => console.log(err));
      return navigate('/home');

    }

    const submit2 = async () => {      

        //'https://localhost:7200/api/candidato'
        await fetch('https://net-api.onrender.com/candidato', {
          method: 'GET',
          headers: {'Content-Type': 'application/json'},
          credentials: 'include'
        }).then((response: any) => {
            response.json()
        }).then((candidatos: any) => setCandidatos(candidatos));
    
        return navigate('/home');
  
      }

      // 'https://localhost:7200/api/candidato'
      useEffect(() => {
        fetch('https://net-api.onrender.com/candidato')
        .then((response) => response.json())
        .then((json) => setCandidatos(json));
      },[]);

      
    //const _res = response.json();
    //setCandidatos(_res)
    //console.log(response.json())

    


    return (
        <div>
            insertar datos
            <div>
            <Stack pos="absolute" top="70" left="50px">
                <Text fontSize='3xl' color="black" fontWeight="bold">Project</Text>
            </Stack>
            <Stack pos="absolute" top="70" left="160px">
                <Text fontSize='3xl' color="#7FB5FF" fontWeight="bold" >React/TypesCript</Text>
            </Stack>
            <Stack pos="absolute" top="70" left="415px">
                <Text fontSize='3xl' color="black" fontWeight="bold" > && </Text>
            </Stack>
            <Stack pos="absolute" top="70" left="485px">
                <Text fontSize='3xl' color="#55D8C1" fontWeight="bold" > .NET </Text>
            </Stack>
            </div>
            <div>
            <Stack pos="absolute" top="145" left="130px">
                <Text fontSize='3xl'>Candidatos</Text>
            </Stack>
            <Stack pos="absolute" top="150" left="290px" >
                <Input value={search} onChange={searcher} variant='filled' placeholder='Buscar por Nombre o Email' size='md' borderRadius='10px' width='300px' />
            </Stack>


            <Stack pos="absolute" top="150" right="140px" >



            <Button onClick={onOpen} colorScheme='gray' size='md' backdropInvert="80%">
                    Añadir Candidato
                </Button>

                <Modal isOpen={isOpen} onClose={onClose} size="4xl">
                    <ModalOverlay />
                    <ModalContent>
                    <ModalHeader>Insertar un Candidato</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody onSubmit={submit}>
                        <div className='form-group'>
                        <label>Nombre</label>
                        <br/>
                        <input type="text" className="form-control" name="firstName" onChange={e => setFirstName(e.target.value)}/>
                        <label>Apellidos</label>
                        <br/>
                        <input type="text" className="form-control" name="lastName" onChange={e => setLastName(e.target.value)}/>
                        <label>Ciudad</label>
                        <br/>
                        <input type="text" className="form-control" name="city" onChange={e => setCity(e.target.value)}/>
                        <label>Pais</label>
                        <br/>
                        <input type="text" className="form-control" name="country" onChange={e => setCountry(e.target.value)}/>
                        <label>Telefono</label>
                        <br/>
                        <input type="text" className="form-control" name="phone" onChange={e => setPhone(e.target.value)}/>
                        <label>Correo Electronico</label>
                        <br/>
                        <input type="text" className="form-control" name="email" onChange={e => setEmail(e.target.value)}/>
                        <label>Tecnologias</label>
                        <input type="text" className="form-control" name="technologies" onChange={e => setTechnologies(e.target.value)}/>
                        <br/>
                        </div>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' type="submit" mr={3} onClick={() => submit()} >Insertar</Button>
                        <Button colorScheme='blue' mr={3} onClick={onClose}>Close</Button>
                    </ModalFooter>
                    </ModalContent>
                </Modal>


                
                
            </Stack>


            </div>
            <div>
            <TableContainer>
                <Table pos="absolute" top="200" left="110px" maxWidth="1700" border='2px' borderColor='gray.200' borderTopRadius='10px' >
                    <TableCaption>Imperial to metric conversion factors</TableCaption>
                    <Thead>
                    <Tr>
                        <Th>Nombre</Th>
                        <Th>Apellidos</Th>
                        <Th>Ciudad </Th>
                        <Th>Pais</Th>
                        <Th>Telefono</Th>
                        <Th>Correo Electronico</Th>
                        <Th>Tecnologias</Th>
                    </Tr>
                    </Thead>
                    <Tbody>
                    <Tr>
                        <Td>Andres</Td>
                        <Td>Retamal Lopez</Td>
                        <Td>Badajoz</Td>
                        <Td>España</Td>
                        <Td >+34 647252678</Td>                        
                        <Td>pruebaAndres@prueba.com</Td>
                        <Td>Html / Angular</Td>
                    </Tr>
                    <Tr>
                        <Td>Andres</Td>
                        <Td>Retamal Lopez</Td>
                        <Td>Badajoz</Td>
                        <Td>España</Td>
                        <Td >+34 647252678</Td>                        
                        <Td>pruebaAndres@prueba.com</Td>
                        <Td>Html / Angular</Td>
                    </Tr>
                    <Tr>
                        <Td>Andres</Td>
                        <Td>Retamal Lopez</Td>
                        <Td>Badajoz</Td>
                        <Td>España</Td>
                        <Td >+34 647252678</Td>                        
                        <Td>pruebaAndres@prueba.com</Td>
                        <Td>Html / Angular</Td>
                    </Tr>
                    <Tr>
                        <Td>Ultimo</Td>
                        <Td>Retamal Lopez</Td>
                        <Td>Badajoz</Td>
                        <Td>España</Td>
                        <Td >+34 647252678</Td>                        
                        <Td>pruebaAndres@prueba.com</Td>
                        <Td>Html / Angular</Td>
                    </Tr>                    
                    {candidatos?.map((candidatos: any)=>(
                        
                        <Tr key={candidatos?.id}>
                            <Td>{candidatos?.id}</Td>
                            <Td>{candidatos.firstName}</Td>
                            <Td>{candidatos.lastName}</Td>
                            <Td>{candidatos.city}</Td>
                            <Td>{candidatos.phone}</Td>
                            <Td>{candidatos.email}</Td>
                            <Td>{candidatos.technologies}</Td>
                        </Tr>
                    ))}

                    </Tbody>
                </Table>
            </TableContainer>
            </div>
        </div>
    )
}

export default Insertar;