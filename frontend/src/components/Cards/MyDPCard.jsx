import React from 'react';
import ImageSlider from '../utils/imageSlider';
import './card-style.css';
import Axios from 'axios';
import { DeleteOutlined } from '@ant-design/icons'
import { EditOutlined } from '@ant-design/icons'

const onDelete =(id) => {
    Axios.delete('http://localhost:4000/DP/delete/' + id)
        .then(
            console.log('deleted')
        )
}

const MyDPCard = props =>{
    return(
       <div className="card text-center">
           <a href={"/DPdetails/"+props.todoId}>
           <div className="overflow">
           
               <ImageSlider images={props.images} className="card-img-top"/>
            </div>
           <div className="card-body text-dark">
               <h4 className="card-title">{props.title} </h4>
               <p className="card-text text-secondary">
                   {props.desc}
               </p>
               
               <a href={"/editDP/"+props.todoId} className="btn"><EditOutlined /></a>
               <a onClick={() => onDelete(props.todoId)} className="btn"><DeleteOutlined /></a>

           </div>
           </a>
       </div> 
    )
}

export default MyDPCard;