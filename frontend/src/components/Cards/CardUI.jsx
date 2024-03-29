import React from 'react';
import ImageSlider from '../utils/imageSlider';
import './card-style.css';

const Card = props =>{
    return(
       <div className="card text-center">
           <div className="overflow">
           
               <a href={"/details/"+props.todoId}><ImageSlider images={props.images} className="card-img-top"/></a>
            </div>
           <div className="card-body text-dark">
               <h4 className="card-title">{props.title} </h4>
               <p className="card-text text-secondary">
                   {props.desc}
               </p>
               <a href={"/details/"+props.todoId} className="btn btn-outline-success">Go to session</a>

           </div>
       </div> 
    )
}

export default Card;