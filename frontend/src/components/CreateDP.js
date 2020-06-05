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
        this.onChangeWhatToEat= this.onChangeWhatToEat.bind(this);
        this.onChangeWhatToAvoid= this.onChangeWhatToAvoid.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
       
        this.state={
            name: '',
            duration: '',
            slevel: '',
            whattoeat:'',
            whattoavoid:'',
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

    onChangeWhatToEat(e){

        this.setState({
            whattoeat: e.target.value
        });

    }

    onChangeWhatToAvoid(e){

        this.setState({
            whattoavoid: e.target.value
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
            whattoeat:this.state.whattoeat,
            whattoavoid:this.state.whattoavoid,
            images: this.state.images
        }

        axios.post('http://localhost:4000/DP/add', newDP)
            .then(res => console.log(res.data));

        this.setState({
            name: '',
            duration: '',
            slevel: '',
            whattoeat:'',
            whattoavoid:'',
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
                <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"></link>
                <div class="w3-container w3-teal">
                    <h2>Create a new Diet Plan</h2>
                </div>
                
                <form  class="w3-container" onSubmit= {this.onSubmit}>
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
                    <div className= "form-group">
                        <label>What To Eat: </label>
                        <textarea type="text"
                               className="form-control"
                               value={this.state.whattoeat}
                               onChange= {this.onChangeWhatToEat}
                               />
                               
                    </div>
                    <div className= "form-group">
                        <label>What To Avoid: </label>
                        <textarea type="text"
                               className="form-control"
                               value={this.state.whattoavoid}
                               onChange= {this.onChangeWhatToAvoid}
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
                            <input type="submit" value="Create Plan" className="w3-btn w3-teal"/>
                        </div>
                    </div>
                </form>
               
            </div>
        )
    }
}

export default CreateDP