import React,{Component} from 'react'
import Card from './CardUI'
import squats from '../assets/squats.jpg';
import yoga from '../assets/yoga.jpg';
import crunches from '../assets/crunches.jpg';

class Cards extends Component{
    render(){
        return(
            
            <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                    <div className="col-md-4">
                        <Card imgsrc={squats} title="Squats" desc="Squats are good for you. do it mayn!" workoutlink="https://www.youtube.com/watch?v=aclHkVaku9U"/>
                    </div>
                    <div className="col-md-4">
                        <Card imgsrc={yoga} title="Yoga" desc="Yoga subha subha krna ok mayn" workoutlink="https://www.youtube.com/watch?v=sTANio_2E0Q"/>
                    </div>
                    <div className="col-md-4">
                        <Card imgsrc={crunches} title="Crunches" desc="Crunches karo pait andr kro mayn!" workoutlink="https://www.youtube.com/watch?v=5ER5Of4MOPI"/>
                    </div>
                    
                </div>
            </div>
            
        )
    }
}

export default Cards