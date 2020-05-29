import React, {Component} from "react"
import {useState} from "react"
import axios from 'axios';
import FileUpload from '../../src/components/utils/FileUpload'

class CreateDP extends Component{
   
    
   
    constructor(props){
        super(props);

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeDuration = this.onChangeDuration.bind(this);
        this.onChangeSLevel = this.onChangeSLevel.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
       
        this.state={
            name: '',
            duration: '',
            slevel: '',
            images: []
        }

    }
    
    

    onChangeName(e){

        this.setState({
            name: e.target.value
        });

    }

    onChangeDuration(e){

        this.setState({
            duration: e.target.value
        });

    }


    onChangeSLevel(e){

        this.setState({
            slevel: e.target.value
        });

    }

    onSubmit(e){
        e.preventDefault();

        console.log(`Form Submitted:`);
        console.log(`Name: ${this.state.name}`);
        console.log(`Duration: ${this.state.duration}`);
        console.log(`Strictness Level: ${this.state.slevel}`);
        

        const newDP = {
            name: this.state.name,
            duration: this.state.duration,
            slevel: this.state.slevel,
            images: this.state.images
        }

        axios.post('http://localhost:4000/DP/add', newDP)
            .then(res => console.log(res.data));

        this.setState({
            name: '',
            duration: '',
            slevel: '',
            images:[]
        })


    }
     updateImages = (newImages) =>{
         console.log(newImages)
        this.setState({images: newImages})
    }
    
    render(){
        
        
        
        return(
            <div style ={{marginTop: 20}}>
                <h3>Create a new Diet Plan</h3>
                <form onSubmit= {this.onSubmit}>
                    <div className= "form-group">
                        <FileUpload refreshFunction={this.updateImages} />
                        <label>Name: </label>
                        <input type="text"
                               className="form-control"
                               value={this.state.name}
                               onChange= {this.onChangeName}
                               />
                               
                    </div>
                    <div className= "form-group">
                        <label>Duration: </label>
                        <input type="text"
                               className="form-control"
                               value={this.state.duration}
                               onChange= {this.onChangeDuration}
                               />
                               
                    </div>
                   
                    <div className="form-group">
                    <label>Strictness Level: </label>
                    <br />
                        <div className="form-check-inline">
                            <input className="form-check-input"
                                   type="radio"
                                   name="priorityOptions"
                                   id="priorityLow"
                                   value="Low"
                                   checked={this.state.slevel==='Low'}
                                   onChange={this.onChangeSLevel}
                                   />
                            <label className="form-check-label">Low</label>

                        </div>
                        <div className="form-check-inline">
                            <input className="form-check-input"
                                   type="radio"
                                   name="priorityOptions"
                                   id="priorityMedium"
                                   value="Medium"
                                   checked={this.state.slevel==='Medium'}
                                   onChange={this.onChangeSLevel}
                                   />
                            <label className="form-check-label">Medium</label>

                        </div>
                        <div className="form-check-inline">
                            <input className="form-check-input"
                                   type="radio"
                                   name="priorityOptions"
                                   id="priorityHigh"
                                   value="High"
                                   checked={this.state.slevel==='High'}
                                   onChange={this.onChangeSLevel}
                                   />
                            <label className="form-check-label">High</label>

                        </div>
                        <div className="form-group">
                            <br />
                            <input type="submit" value="Create Plan" className="btn btn-primary"/>
                        </div>
                    </div>
                </form>
               
            </div>
        )
    }
}

export default CreateDP