import React from 'react';
import { Carousel} from 'antd';
import squats from '../assets/squats.jpg';
import yoga from '../assets/yoga.jpg';
import Axios from 'axios';


function ImageSlider(props) {
    return(
        <div>
            <Carousel autoplay>
                {props.images.map((image, index) =>(
                    <div key={index}>
                        <img style= {{ width: '100%', maxHeight:'150px'}} src={`http://localhost:4000/${image}`} alt="todoImage" />

                    </div>
                ))}
            </Carousel>
        </div>
    )

}

export default ImageSlider