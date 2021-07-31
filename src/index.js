import React from 'react';
import ReactDOm from 'react-dom';
import Card from './Cards';
import Heading from './Heading';
import Sdata from "./Sdata"



ReactDOm.render(
    <>
        <Heading 
            title="The Nextflix Series"
        />
       { Sdata.map(val => <Card
                imgsrc={val.imgsrc}
                title={val.title}
                sname={val.sname}
                link={val.link}
         />)
        }
    </>
    , document.getElementById('root'));