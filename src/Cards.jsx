import React from 'react';
import "./index.css"


// const cssStyle = {
//     width: "500px",
//     height: "350px",
//     SVGAnimatedBoolean: "true"
// };



function Card(props) {
    console.log(props);
    return (
        <>
            <div className="cards">
                <div className="card">
                    <img
                        className="card_img"
                        src={props.imgsrc}
                        alt="myPic"
                        // style={cssStyle}
                    />
                    <div className="card_info">
                        <span className="card_category">{props.title}</span>
                        <h3 className="card_title">{props.sname}  </h3>
                        <a
                            href={props.link}
                            target="_blank"
                        >
                            <button className="button"> Watch Now </button>
                        </a>
                    </div>

                </div>
            </div>
        </>
    );
}


export default Card;
