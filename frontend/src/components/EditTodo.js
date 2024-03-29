import React, {Component} from "react"
import axios from 'axios';
import FileUpload from '../../src/components/utils/FileUpload'
import LinkUpload from "./utils/LinkUpload";

class EditTodo extends Component{

    constructor(props){
        super(props);

        this.onChangeSessionTitle= this.onChangeSessionTitle.bind(this);
        this.onChangeTodoResponsible= this.onChangeTodoResponsible.bind(this);
        this.onChangeTodoPriority= this.onChangeTodoPriority.bind(this);
        this.onChangeTodoCompleted= this.onChangeTodoCompleted.bind(this);
        this.onSubmit= this.onSubmit.bind(this);

        this.state= {
            session_title : '',
            todo_responsible : '',
            todo_priority : '',
            todo_completed : false,
            images: [],
            links:[]
        }
    }

    componentDidMount(){
        axios.get('http://localhost:4000/todos/'+this.props.match.params.id)
        .then(response => {
            this.setState({
                session_title: response.data.session_title,
                todo_responsible: response.data.todo_responsible,
                todo_priority: response.data.todo_priority,
                todo_completed: response.data.todo_completed,
                images: response.data.images,
                links: response.data.links
            })
        })
        .catch(function(error){
            console.log(error)
        })
    }

    onChangeSessionTitle(e){
        this.setState({
            session_title: e.target.value
        });
    }

    onChangeTodoResponsible(e){
        this.setState({
            todo_responsible: e.target.value
        });
    }
    onChangeTodoPriority(e){
        this.setState({
            todo_priority: e.target.value
        });
    }
    onChangeTodoCompleted(e){
        this.setState({
            todo_completed: !this.state.todo_completed
        });
    }

    onSubmit(e){
        e.preventDefault();
        const obj = {
            session_title: this.state.session_title,
            todo_responsible: this.state.todo_responsible,
            todo_priority: this.state.todo_priority,
            todo_completed: this.state.todo_completed,
            images: this.state.images,
            links: this.state.links

        };
        axios.post('http://localhost:4000/todos/update/'+ this.props.match.params.id, obj)
            .then(res => console.log(res.data));

            this.props.history.push('/');
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
            <div>
               <h3>Update Todo</h3>
               <form onSubmit= {this.onSubmit}>
                    <div className="form-group">
                    <FileUpload refreshFunction={this.updateImages} />
                        <label>Title: </label>
                        <input type= "text"
                                className="form-control"
                                value={this.state.session_title}
                                onChange={this.onChangeSessionTitle}
                                />


                    </div>
                    <div className="form-group">
                        <label>Responsible: </label>
                        <input type= "text"
                                className="form-control"
                                value={this.state.todo_responsible}
                                onChange={this.onChangeTodoResponsible}
                                />


                    </div>
                    <div className="form-group">
                        <label>Add links-to-workouts for this session: </label>
                        <LinkUpload refreshFunction={this.updateLinks}  />
                    </div>

                    <div className="form-group">
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
                       
                    </div>
                    <div className="form-check">
                        <input type="checkbox"
                                className="form-check-input"
                                id="completedCheckbox"
                                onChange={this.onChangeTodoCompleted}
                                checked= {this.state.todo_completed}
                                value={this.state.todo_completed}
                                />
                            <label className="form-check-label" htmlFor="completedCheckbox">
                                Completed
                            </label>
                    </div>
                    <br/>
                    <div className="form-group">
                        <input type="submit" value="Update todo" className="btn btn-primary" />
                    </div>
                    

                    </form>
            </div>
        )
    }
}

export default EditTodo