 * Paquetes instalados:
    -->  npm i react-router-dom @types/react-router-dom

* Rutas postman:
    (Post)Register --> http://localhost:5200/api/register
    (Post)Login --> http://localhost:5200/api/login
    (Get)Users --> http://localhost:5200/api/user


* Rutas frontend:
    (Post)Register --> Se hace el registro Ok 201 y se guarda en la db
    (Post)Login --> http://localhost:5200/api/login
    (Get)Users --> http://localhost:5200/api/user


// PRIMEROS PASOS
Lo que necesito es que coja la cookie porque sin cogerla, solo se queda registrada en la aplicacion.
pero cuando me voy a otra pestaña me sigue saltando el 401.

Y luego necesitaria hacer el metodo de Buscar dato de la pestaña insertar.

// DESPUES HACER UN ONCLICK QUE PASE LOS DATOS DE UN PUNTO A OTRO


* ----------------------------------------------------------------------------------------------------------------------------------------------

*    * ----___---- Datos / Ideas ----___----

* *  IDEA 1:
    * Hacer otra pestaña que se llame --> "info" donde dentro contenga un submenu como el del inicio y que tenga varias pestañas o que se puedan crear
    un maximo de 5.
    * 1. En 1 de ellas guardaremos información temporal, por ejemplo enlaces de videos no terminados de ver o canciones a medias.
    * 2. 




* *  IDEA 2:
    * Darle un diseño al Home
        --> Mejorar los diseños de Login y Register




* *  IDEA 3:
    * Hacer el back del apartado "Añadir Candidato" y luego hacer las peticiones en el front




* *  IDEA 4: //Dificultades --> tengo que hacer algo para obtener el token si no, no podre
    * Hacer el tema de que no se vean todas las pestañas, si no que cuando haga login se quiten "login, register" y aparezca "logout"
    y no aparezca al principio de todo todas las pestañas solo la de home / login / register




* *  IDEA 5:
    * Hacer el tema de "He olvidado mi contraseña"




* *  IDEA 6:
    * Paso 1 --> Podria hacer otra pestaña que sea como un foro que ya tengo el diseño creado del proyecto second commint 
    * Paso 2 --> Hacerlo funcional con socket (algo un cacho mas complejo)




* *  IDEA 7:
    * Hacer un contador de que cuando entre una persona y acceda a otra pestaña y se actualice se vaya sumando en un pequeño marcador




* *  IDEA 8:
    * Hacer Otra pestaña /datos --> donde aparezcan los datos que has registrados (tus propios datos) hacerlo igual que el video
    que enlaza los datos con las propiedades "props"
    - Y intentar ver si puedo poner el modo oscuro con un boton como vimos en un video




* *  IDEA 9: --> no se he sido capaz, si tengo la funcion javascript si,pero con tsx no
    * Darle funcionalidad a "Buscar por Nombre o Email" de la pestaña /insertar




* *  IDEA 10:
    * Hacer una ventana modal explicando que esta pestaña es como una inscripcion para ver la gente que accede y prueba mi appi.
    Indicando que solo se puede hacer 1 registro por usuario


* *  IDEA 10:
    * Referencia de pagina para mi proyecto
    * https://brittanychiang.com/#projects
    * https://github.com/bchiang7/v4




    *    * ----___---- Problemas ----___----


* ----------------------------------------------------------------------------------------------------------------------------------------------

    --> Problema en "app.tsc":
        <Route path="/" element={() => <Home name={name}/>}/>  
        <Route path="/login" element={() => <Login setName={}={setName}/>}/>  

    --> Asi no da problema --> <Route path="/login" element={<Login/>}/> --> No da problema en la ruta




    *    * ----___---- Solucionado ----___----


    * ----------------------------------------------------------------------------------------------------------------------------------------------

    --> Solucion --> https://es.stackoverflow.com/questions/507567/type-path-string-component-element-is-not-assignable-to-type-pro
    --> El problema principal era por que en los inputs se me paso poner el nombre name="name " / name="email"

    * ----------------------------------------------------------------------------------------------------------------------------------------------

    --> Problema con la redirecion he probado
        Guia --> https://stackoverflow.com/questions/63690695/react-redirect-is-not-exported-from-react-router-dom
        -->https://reactrouter.com/docs/en/v6/api#usenavigate
        -->https://reactrouter.com/docs/en/v6/api#navigate
        
        Como se hace es tan facil como hacer --> let navigate = useNavigate();
        Y poner en una funcion --> return navigate('/login');
        Y importar --> import { useNavigate } from "react-router-dom";

        * ----------------------------------------------------------------------------------------------------------------------------------------------

    --> Problema:
        Al hacer el login no se genera el token en las cookies y todo el mundo podia acceder estuviera bien o mal el login.
            Arreglado añadiendo las cookies --> const cookies = new Cookies();
            cookies.set('name','value', {path: '/'});
            window.location.href='/insertar';



Tengo una duda de cuando hicimos lo del token jwt,
Cuando en postman hago el login solo me sale el mensaje del token,pero al intentar obtener los usuarios me aparece como que no esta logeado un 401