import React from 'react';
import "./index.css";
import Card from './Cards';
import Heading from './Heading';
import Sdata from "./Sdata"


const App = () => (
    <>
        <Heading 
            title="The Nextflix Series"
        />
       { Sdata.map(val => <Card
                key={val.id}
                imgsrc={val.imgsrc}
                title={val.title}
                sname={val.sname}
                link={val.link}
         />)
        }
    </>
)

export default App;





