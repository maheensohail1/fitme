import React, { Component, useEffect, useState} from 'react'
import Axios from 'axios'
import jwt_decode from 'jwt-decode'
import {Icon, Col, Row} from 'antd'
import Meta from 'antd/lib/card/Meta'
import MyDPCard from './Cards/MyDPCard'
import ImageSlider from '../../src/components/utils/imageSlider';
function MyDPs(){
    
    const [DPs, setDPs] = useState([])

    const token = localStorage.usertoken
    const decoded = jwt_decode(token)

    useEffect(() => {
        Axios.post('http://localhost:4000/DP/getMyDPs/' + decoded._id)
            .then(response => {
                if(response.data.success){
                    setDPs(response.data.dps)

                    console.log(response.data.dps)
                } else{
                    alert('Failed to fetch data')
                }
            })
    })

    const renderCards= DPs.map((dp, index) => {
        return (<div className="container-fluid d-flex justify-content-center">
    <div className="row">
        <div className="col-md-4">
            <MyDPCard todoId={dp._id} images={dp.images} title={dp.name} desc={dp.duration}/>
            <br />
        </div>
        
        
    </div>
</div>)

    
    })



        return (
         <div style={{ width: '75%', margin:'3rem auto'}}>
             <div style={{ textAlign:'center'}}>
                 <h2> My Diet Plans </h2>
                 <br />
                 <br />
             </div>

             {DPs.length === 0?
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

export default MyDPs