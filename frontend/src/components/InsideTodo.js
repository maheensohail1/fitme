import React, {useEffect, useState} from 'react';
import Axios from 'axios';
import {Card, Col, Row} from 'antd';
import {Link} from 'react-router-dom';
import ImageSlider from '../../src/components/utils/imageSlider';
import Meta from 'antd/lib/card/Meta'
//const { Meta } = Card;

function InsideTodo(props){

    const todoId= props.match.params.todoId
    const [Todo , setTodo] = useState([])

    useEffect(() =>{
       // Axios.get(`http://localhost:4000/todos/todos_by_id?id=${todoId}&type=single`)
       Axios.get('http://localhost:4000/todos/' + todoId)
            .then(response =>{
                if(response.data.success){
                    setTodo(response.data[0])
                    console.log(response.data[0])
                } else{
                    alert('not found')
                }
                
            })

    }, [])


    const renderCards= Todo.map((todo, index) => {
        return (
        <Col lg={6} md={8} xs={24}>
        <Card 
        hoverable={true}
        
        >
            <Meta
                title={todo.session_title}
                description={todo.links}
                />
        </Card>
        </Col>
)
    })
        return(
            <div style={{ width: '75%', margin:'3rem auto'}}>
             <div style={{ textAlign:'center'}}>
                 <h2> {todoId} </h2>
             </div>

             {Todo.length === 0?
                <div style={{ display:'flex', height:'300px', justifyContent: 'center', alignItems:'center'}}>
                    <h2>No posts yet</h2>
                </div>:
                <div>
                    <Row gutter={[16,16]}>
                        
                        {renderCards}

                    </Row>
                </div>
             }

        <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <button>Load More</button>
                </div>

         </div>
        )

}
export default InsideTodo