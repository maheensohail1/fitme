import React, {Component, useState} from "react"
import axios from 'axios';
import Card2 from './Cards/Card2';


const L = props => (
    <div className="container-fluid d-flex justify-content-center">
    <div className="row">
        <div className="col-md-4">
        <Card2 desc={props.l.link} title={props.title}/>
        <br />
        
        </div>       
    </div>
</div>       
)

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

    linkList(){
        const t= this.state.session_title
        return this.state.links.map(function(currentLink, i){
            return <L l = {currentLink} title={t} key = {i} />
        });
    }

   
    render(){
        return(
            <div>
               <br />
                        <p>Showing All videos for :{this.state.session_title} </p>
           
              {this.state.links.length === 0?
                <div style={{ display:'flex', height:'300px', justifyContent: 'center', alignItems:'center'}}>
                    <h2>No content in this session yet</h2>
                </div>:
                <div>
               {this.linkList()}
          

                </div>
             }
               
            </div>
        )
    }
}

export default TodoDetails