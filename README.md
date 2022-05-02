 * Paquetes instalados:
    -->  npm i react-router-dom @types/react-router-dom

* Rutas postman:
    (Post)Register --> http://localhost:5200/api/register
    (Post)Login --> http://localhost:5200/api/login
    (Get)Users --> http://localhost:5200/api/user

* ----------------------------------------------------------------------------------------------------------------------------------------------

 * Problemas con las rutas "path" ahora ya no se usa component, ahora se usa element

* ----------------------------------------------------------------------------------------------------------------------------------------------

    --> Solucion --> https://es.stackoverflow.com/questions/507567/type-path-string-component-element-is-not-assignable-to-type-pro
    --> Aqui en el minuto 1:14 me esta dando problemas en la console donde no detecta bien la ruta

* ----------------------------------------------------------------------------------------------------------------------------------------------

    --> Problema con la redirecion he probado
        Guia --> https://stackoverflow.com/questions/63690695/react-redirect-is-not-exported-from-react-router-dom
        -->https://reactrouter.com/docs/en/v6/api#usenavigate
        -->https://reactrouter.com/docs/en/v6/api#navigate
        pero no lo consigo

* ----------------------------------------------------------------------------------------------------------------------------------------------

    --> Problema:
        Al no enlazarse bien las rutas con el back, al hacer el login no se genera el token en las cookies.
        minuto 1:19

* ----------------------------------------------------------------------------------------------------------------------------------------------

    --> Problema en "app.tsc":
        <Route path="/" element={() => <Home name={name}/>}/>  
        <Route path="/login" element={() => <Login setName={}={setName}/>}/>  

    --> Asi no da problema --> <Route path="/login" element={<Login/>}/> --> No da problema en la ruta