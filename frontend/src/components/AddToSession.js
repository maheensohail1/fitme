import React, {Component} from "react"
import {useState} from "react"
import axios from 'axios';
import FileUpload from '../../src/components/utils/FileUpload'

class AddToSession extends Component{
   
    
   
    constructor(props){
        super(props);

        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeLink = this.onChangeLink.bind(this);
       
        this.state={
            title: '',
            link: '',
            images: []
        }

        const todoId = props.match.params.todoId

    }
    
    

    onChangeTitle(e){

        this.setState({
            title: e.target.value
        });

    }

    onChangeLink(e){

        this.setState({
            link: e.target.value
        });

    }
    

    onSubmit(e){
        e.preventDefault();

        const newWorkout = {
            title: this.state.title,
            link: this.state.link,
            images: this.state.images
        }


       // axios.post(`http://localhost:4000/todos/todos_by_id?id=${todoId}/addWorkout`, newWorkout)
           // .then(res => console.log(res.data));


        this.setState({
            title: '',
            link: '',
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
                <h3>Add to Session</h3>
                <form onSubmit= {this.onSubmit}>
                    <div className= "form-group">
                        <FileUpload refreshFunction={this.updateImages} />
                        <label>Title: </label>
                        <input type="text"
                               className="form-control"
                               value={this.state.title}
                               onChange= {this.onChangeTitle}
                               />
                               
                    </div>
                    <div className= "form-group">
                        <label>link-to-workout: </label>
                        <input type="text"
                               className="form-control"
                               value={this.state.link}
                               onChange= {this.onChangeLink}
                               />
                               
                    </div>
                   
                    
                        <div className="form-group">
                            <input type="submit" value="Create Session" className="btn btn-primary"/>
                        </div>
                   
                </form>
               
            </div>
        )
    }
}

export default AddToSession