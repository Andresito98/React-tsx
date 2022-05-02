import React from "react";

const Home = (props: {name: string}) => {
    


    return (
        <div>
            {props.name ? 'Hola' + props.name : 'No estas logeado en'}
        </div>
    );
};

export default Home;