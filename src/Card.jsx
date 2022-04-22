import React from "react";

function Card(props){ 
  return (
    <>
    <div className="card">
    <img src={props.imgsrc} target="_blank" alt="mypic"/>
    <h1 className="headings">{props.name}</h1>
    <h2 className="headings">"{props.title}"</h2>
    <a href={props.link} target="_blank"><button>Watch Now</button></a>
    </div>
    </>
  ); 
}
 export default Card;
