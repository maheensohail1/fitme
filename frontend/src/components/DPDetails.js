import React, {Component, useState} from "react"
import axios from 'axios';



      


class DPDetails extends Component{

    constructor(props){ 
        super(props);
        this.state= {
            name: '',
            about: '',
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
                about: response.data.about,
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
           <label>About : </label>
           <p>{this.state.about}</p>
           <br />
           <br />
           <label>Duration : </label>
           <p>{this.state.duration}</p>
           <br />
           <br />
          <label> What To Eat : </label>
           <p>{this.state.whattoeat}</p>
           <br />
           <br />
          <label>What To Avoid : </label>
          <p>{this.state.whattoavoid}</p>

               
            </div>
        )
    }
}

export default DPDetails