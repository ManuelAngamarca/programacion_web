import React from "react";
export default function Componente1(props){
    console.log(props.userInfo.nombre);
    console.log(props.userInfo.edad);
    console.log(props.userInfo.color);

    return(
        <div>
            <h2>
            Hola {props.userInfo.nombre}, tiene {props.userInfo.edad} años, 
            su color favorito es el {props.userInfo.color}.
            </h2>
        </div>
    );
}
