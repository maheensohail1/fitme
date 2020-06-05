import React, { Component, useEffect, useState} from 'react'
import Axios from 'axios'
import jwt_decode from 'jwt-decode'
import {Icon, Col, Row} from 'antd'
import Meta from 'antd/lib/card/Meta'
import MyCard from './Cards/MyCard'
import ImageSlider from '../../src/components/utils/imageSlider';
function MySessions(){
    
    const [Todos, setTodos] = useState([])

    const token = localStorage.usertoken
    const decoded = jwt_decode(token)

    useEffect(() => {
        Axios.post('http://localhost:4000/todos/getMySessions/' + decoded._id)
            .then(response => {
                if(response.data.success){
                    setTodos(response.data.todos)

                    console.log(response.data.todos)
                } else{
                    alert('Failed to fetch data')
                }
            })
    })

    const renderCards= Todos.map((todo, index) => {
        return (<div className="container-fluid d-flex justify-content-center">
    <div className="row">
        <div className="col-md-4">
            <MyCard todoId={todo._id} images={todo.images} title={todo.session_title} desc={todo.todo_responsible}/>
            <br />
        </div>
        
        
    </div>
</div>)

    
    })



        return (
         <div style={{ width: '75%', margin:'3rem auto'}}>
             <div style={{ textAlign:'center'}}>
                 <h2> My Sessions </h2>
                 <br />
                 <br />
             </div>

             {Todos.length === 0?
                <div style={{ display:'flex', height:'300px', justifyContent: 'center', alignItems:'center'}}>
                    <h2>No posts yet</h2>
                </div>:
                <div>
                       {renderCards}

                </div>
             }

        

         </div>
        )
    
}

export default MySessions