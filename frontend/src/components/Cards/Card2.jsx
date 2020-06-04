import React from 'react';
import ImageSlider from '../utils/imageSlider';
import './card-style.css';

const Card2 = props =>{
    return(
       <div className="card text-center">
           <div className="card-body text-dark">
               <h4 className="card-title">{props.title} </h4>
               <p className="card-text text-secondary">
                   {props.desc}
               </p>
               <a href={props.desc} className="btn btn-outline-success">Donot Click!</a>

           </div>
       </div> 
    )
}

export default Card2;