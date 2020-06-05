import React from 'react';
import ImageSlider from '../utils/imageSlider';
import './card-style.css';
import Axios from 'axios';
import squats from '../assets/delete-24px.svg';
import { DeleteOutlined } from '@ant-design/icons'
import { EditOutlined } from '@ant-design/icons'

const onDelete =(id) => {
    Axios.delete('http://localhost:4000/todos/delete/' + id)
        .then(
            console.log('deleted')
        )
}

const MyCard = props =>{
    return(
       <div className="card text-center">
           <a href={"/details/"+props.todoId}>
           <div className="overflow">
           
               <ImageSlider images={props.images} className="card-img-top"/>
            </div>
           <div className="card-body text-dark">
               <h4 className="card-title">{props.title} </h4>
               <p className="card-text text-secondary">
                   {props.desc}
               </p>
               
               <a href={"/edit/"+props.todoId} className="btn"><EditOutlined /></a>
               <a onClick={() => onDelete(props.todoId)} className="btn"><DeleteOutlined /></a>

           </div>
           </a>
       </div> 
    )
}

export default MyCard;