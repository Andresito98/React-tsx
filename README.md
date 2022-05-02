
* Rutas postman:
    (Post)Register --> http://localhost:5200/api/register
    (Post)Login --> http://localhost:5200/api/login
    (Get)Users --> http://localhost:5200/api/user


* Empezamos haciendo las carpetas y los archivos correspondientes.



 * Paquetes instalados:
    -->  npm i react-router-dom @types/react-router-dom

 * Problemas con las rutas "path" ahora ya no se usa component, ahora se usa element

    --> Solucion --> https://es.stackoverflow.com/questions/507567/type-path-string-component-element-is-not-assignable-to-type-pro
    --> Aqui en el minuto 1:14 me esta dando problemas en la console donde no detecta bien la ruta


    --> Problema con la redirecion he probado
        Guia --> https://stackoverflow.com/questions/63690695/react-redirect-is-not-exported-from-react-router-dom
        -->https://reactrouter.com/docs/en/v6/api#usenavigate
        -->https://reactrouter.com/docs/en/v6/api#navigate
        pero no lo consigo












     * Estructura basica:

        import React from "react";

        const Register = () => {
            return (
                <div>
                    
                </div>
            );
        };

        export default Register;