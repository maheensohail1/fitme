import React from 'react';
import ImageSlider from '../utils/imageSlider';
import './card-style.css';
import squats from '../assets/squats.jpg';
import yoga from '../assets/yoga.jpg';
const Card = props =>{
    return(
       <div className="card text-center">
           <div className="overflow">
    {/*<img src={squats} alt="Image 1" className="card-img-top"/>*/}
               <ImageSlider images={props.images} className="card-img-top"/>
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