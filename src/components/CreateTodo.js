import React, {Component} from "react"
import axios from 'axios';

class CreateTodo extends Component{
    constructor(props){
        super(props);

        this.onChangeSessionTitle = this.onChangeSessionTitle.bind(this);
        this.onChangeTodoResp = this.onChangeTodoResp.bind(this);
        this.onChangeTodoPriority = this.onChangeTodoPriority.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state={
            session_title: '',
            todo_responsible: '',
            todo_priority: '',
            todo_completed: false,

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

        const newTodo = {
            session_title: this.state.session_title,
            todo_responsible: this.state.todo_responsible,
            todo_priority: this.state.todo_priority,
            todo_completed: this.state.todo_completed
        }

        axios.post('http://localhost:4000/todos/add', newTodo)
            .then(res => console.log(res.data));

        this.setState({
            session_title: '',
            todo_responsible: '',
            todo_priority: '',
            todo_completed: false,

        })

    }
    render(){
        return(
            <div style ={{marginTop: 20}}>
                <h3>Create new Session</h3>
                <form onSubmit= {this.onSubmit}>
                    <div className= "form-group">
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
                            <input type="submit" value="Create Session" className="btn btn-primary"/>
                        </div>
                    </div>
                </form>
               
            </div>
        )
    }
}

export default CreateTodo