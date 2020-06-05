import React, {Component} from "react"
import {useState} from "react"
import jwt_decode from 'jwt-decode'
import axios from 'axios';
import FileUpload from '../../src/components/utils/FileUpload'
import LinkUpload from "./utils/LinkUpload";

class CreateTodo extends Component{
   
    
   
    constructor(props){
        super(props);

        this.onChangeSessionTitle = this.onChangeSessionTitle.bind(this);
        this.onChangeTodoResp = this.onChangeTodoResp.bind(this);
        this.onChangeTodoPriority = this.onChangeTodoPriority.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
       
        this.state={
            uid:'',
            session_title: '',
            todo_responsible: '',
            todo_priority: '',
            todo_completed: false,
            images: [],
            links:[]
        }

    }
    
    

    onChangeSessionTitle(e){

        this.setState({
            session_title: e.target.value
        });

    }

    onChangeTodoResp(e){

        this.setState({
            todo_responsible: e.target.value
        });

    }


    onChangeTodoPriority(e){

        this.setState({
            todo_priority: e.target.value
        });

    }

    onSubmit(e){
        e.preventDefault();

        console.log(`Form Submitted:`);
        console.log(`Session Title: ${this.state.session_title}`);
        console.log(`Todo responsible: ${this.state.todo_responsible}`);
        console.log(`Todo priority: ${this.state.todo_priority}`);
        console.log(`Todo completed: ${this.state.todo_completed}`);

        const token = localStorage.usertoken
        const decoded = jwt_decode(token)

        const newTodo = {
            uid: decoded._id,
            session_title: this.state.session_title,
            todo_responsible: this.state.todo_responsible,
            todo_priority: this.state.todo_priority,
            todo_completed: this.state.todo_completed,
            images: this.state.images,
            links: this.state.links
        }

        axios.post('http://localhost:4000/todos/add', newTodo)
            .then(res => console.log(res.data));

        this.setState({
            session_title: '',
            todo_responsible: '',
            todo_priority: '',
            todo_completed: false,
            images:[],
            links: []
        })


    }
     updateImages = (newImages) =>{
         console.log(newImages)
        this.setState({images: newImages})
    }
    updateLinks = (newLinks) =>{
        console.log(newLinks)
       this.setState({links: newLinks})
   }
    
    render(){
        
        
        
        return(
            <div style ={{marginTop: 20}}>
                <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"></link>
                <div class="w3-container w3-teal">
                    <h2>Create a new Session</h2>
                </div>
                
                <form onSubmit= {this.onSubmit}>
                    <div className= "form-group">
                        <FileUpload refreshFunction={this.updateImages} />
                        <label>Title: </label>
                        <input type="text"
                               className="form-control"
                               value={this.state.session_title}
                               onChange= {this.onChangeSessionTitle}
                               />
                               
                    </div>
                    <div className= "form-group">
                        <label>responsible: </label>
                        <input type="text"
                               className="form-control"
                               value={this.state.todo_responsible}
                               onChange= {this.onChangeTodoResp}
                               />
                               
                    </div>                
                   
                    <div className="form-group">
                        <label>Add links-to-workouts for this session: </label>
                        <LinkUpload refreshFunction={this.updateLinks}  />
                    </div>

                    <div className="form-group">
                    <label>Intensity: </label>
                    <br />
                        <div className="form-check-inline">
                            <input className="form-check-input"
                                   type="radio"
                                   name="priorityOptions"
                                   id="priorityLow"
                                   value="Low"
                                   checked={this.state.todo_priority==='Low'}
                                   onChange={this.onChangeTodoPriority}
                                   />
                            <label className="form-check-label">Low</label>

                        </div>
                        <div className="form-check-inline">
                            <input className="form-check-input"
                                   type="radio"
                                   name="priorityOptions"
                                   id="priorityMedium"
                                   value="Medium"
                                   checked={this.state.todo_priority==='Medium'}
                                   onChange={this.onChangeTodoPriority}
                                   />
                            <label className="form-check-label">Medium</label>

                        </div>
                        <div className="form-check-inline">
                            <input className="form-check-input"
                                   type="radio"
                                   name="priorityOptions"
                                   id="priorityHigh"
                                   value="High"
                                   checked={this.state.todo_priority==='High'}
                                   onChange={this.onChangeTodoPriority}
                                   />
                            <label className="form-check-label">High</label>

                        </div>
                        
                        <div className="form-group">
                        <br />
                            <input type="submit" value="Create Session" className="btn w3-teal"/>
                        </div>
                    </div>
                </form>
               
            </div>
        )
    }
}

export default CreateTodo