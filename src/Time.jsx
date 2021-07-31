import React  from 'react';



function Time(){
    
const currDate = new Date().toLocaleDateString();
const currTime = new Date().toLocaleTimeString();
    return (<><p>Current date is :  {currDate}</p>,
        <p>Current time is :  {currTime}</p></>);
}


export default Time;