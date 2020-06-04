import React from 'react';
import ImageSlider from '../utils/imageSlider';
import './card2-style.css';

const Card2 = props =>{
    return(
       <div className="card2 text-center">
           <div className="card2-body text-dark">
               <h4 className="card-title">{props.title} </h4>
               <a href={props.desc} className="btn btn-outline-success">Donot Click!</a>

           </div>
       </div> 
    )
}

export default Card2;