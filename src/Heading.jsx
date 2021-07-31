import React from 'react';


const heading = {

    color: "red",
    width:"100%",
    textAlign: "center",
    textShadow: "2px 1px #782345"
}

function Heading(props){
    return ( 
    <h1 className="heading_style">{props.title}</h1>);
}

export default Heading;