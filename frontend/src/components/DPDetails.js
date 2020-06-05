import React, {Component, useState} from "react"
import axios from 'axios';



      


class DPDetails extends Component{

    constructor(props){ 
        super(props);
        this.state= {
            name: '',
            duration: '',
            slevel: '',
            whattoeat:'',
            whattoavoid:'',
            
           
        }
    }

    

    componentDidMount(){
        axios.get('http://localhost:4000/DP/'+this.props.match.params.id)
        .then(response => {
            this.setState({
                name: response.data.name,
                duration: response.data.duration,
                slevel: response.data.slevel,
                whattoeat: response.data.whattoeat,
                whattoavoid: response.data.whattoavoid

            })
            
        })
        .catch(function(error){
            console.log(error)
        })
    }

   
    render(){
        return(
            <div>
              
           <h2>{this.state.name} </h2>
           <br />
           <br />
           <p>Duration : {this.state.duration}</p>
           <br />
           <br />
           <p>What To Eat : {this.state.whattoeat}</p>
           <br />
           <br />
           <p>What To Avoid : {this.state.whattoavoid}</p>

               
            </div>
        )
    }
}

export default DPDetails