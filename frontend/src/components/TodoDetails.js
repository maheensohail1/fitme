import React, {Component, useState} from "react"
import axios from 'axios';
import Card2 from './Cards/Card2';




class TodoDetails extends Component{

    constructor(props){ 
        super(props);

        this.state= {
            session_title : '',
            todo_responsible : '',
            links: []
           
        }
    }

    

    componentDidMount(){
        axios.get('http://localhost:4000/todos/'+this.props.match.params.id)
        .then(response => {
            this.setState({
                session_title: response.data.session_title,
                todo_responsible: response.data.todo_responsible,
                links: response.data.links

            })
            
        })
        .catch(function(error){
            console.log(error)
        })
    }

    /*renderCards= this.state.links.map((link, index) => {
        return (
            <div className="container-fluid d-flex justify-content-center">
            <div className="row">
                <div className="col-md-4">
                   <Card2 desc={link}/>
                </div>
                
                
            </div>
        </div>
        
       
    )
    })*/

    render(){
        return(
            <div>
              {this.state.links.length === 0?
                <div style={{ display:'flex', height:'300px', justifyContent: 'center', alignItems:'center'}}>
                    <h2>No posts yet</h2>
                </div>:
                <div>
                    
                        
              {this.state.links.map((link, index) => {
        return (
           
                   <h2>{link}</h2>
               
        
       
    )
    })}

                    
                </div>
             }
               <form onSubmit= {this.onSubmit}>
                    <div className="form-group">
                        <label>Title: </label>
                        <input type= "text"
                                className="form-control"
                                value={this.state.session_title}
                            
                                />


                    </div>
                    <div className="form-group">
                        <label>Responsible: </label>
                        <input type= "text"
                                className="form-control"
                                value={this.state.todo_responsible}
                               
                                />


                    </div>

                   
                   

                    </form>
            </div>
        )
    }
}

export default TodoDetails