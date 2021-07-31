import React from 'react';
import "./index.css";
import Heading from './Heading';
import Para from './Para';
import List from './List';
import Time from './Time';
import  {add , sub , mul , div } from './Calculator';


function App(){
    return(<>
        <ul>
            <li>Add of two number is : {add(2,5)}</li>
            <li>Sub of two number is : {sub(2,5)}</li>
            <li>Mul of two number is : {mul(2,5)}</li>
            <li>Div of two number is : {div(22,7)}</li>
        </ul>
    </>);
}


export default App;





