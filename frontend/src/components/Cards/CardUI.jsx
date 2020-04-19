import React from 'react';

import './card-style.css';
const Card = props =>{
    return(
       <div className="card text-center">
           <div className="overflow">
               <img src={props.imgsrc} alt="Image 1" className="card-img-top"/>
           </div>
           <div className="card-body text-dark">
               <h4 className="card-title">{props.title} </h4>
               <p className="card-text text-secondary">
                   {props.desc}
               </p>
               <a href={props.workoutlink} className="btn btn-outline-success">Donot Click!</a>

           </div>
       </div> 
    )
}

export default Card;