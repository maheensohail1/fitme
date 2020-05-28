import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import {BrowserRouter as Router, Route} from "react-router-dom";

class Landing extends Component {
    logOut(e) {
        e.preventDefault()
        localStorage.removeItem('usertoken')
        this.props.history.push(`/`)
    }

    render() {
        const mystyle = {
            color: "gray",
            padding: "0px",
            fontFamily: "Impact",
            fontSize: 35
          
          }
        const loginRegLink = (
            <ul className="navbar-nav">
                <li className="nav-item">
                <a href="/" className="navbar-brand" style={mystyle}>FITME</a>
                </li>
                <li className="nav-item">
                <a href="/workouts" className="nav-link">
                        workouts
            </a>
                </li>
                <li className="nav-item">
                <a href="/login" className="nav-link">
                        Login
            </a>
                </li>
                <li className="nav-item">
                <a href="/register" className="nav-link">
                        Register
          </a>
                </li>
                
                <li className="nav-item">
                    <a href="/getTodos" className="nav-link">
                        All Workouts
                    </a>
                </li>
                <li className="nav-item">
                    <a href="/getDPs" className="nav-link">
                        Diet Plans
                    </a>
                </li>
            </ul>
        )
        
        const userLink = (
            <ul className="navbar-nav">
                 <li className="nav-item">
                <a href="/" className="navbar-brand" style={mystyle}>FITME</a>
                </li>
                <li className="nav-item">
                    <a href="/profile" className="nav-link" >
                        User
                    </a>
                </li>
                <li className="nav-item">
                    <a href="/getTodos" className="nav-link">
                        All Workouts
                    </a>
                </li>
                <li className="nav-item">
                    <a href="/getDPs" className="nav-link">
                        Diet Plans
                    </a>
                </li>

                <li className="nav-item">
                    <a href="/create" className="nav-link">
                        Create Session
                    </a>
                </li>
                <li className="nav-item">
                    <a href="/createDP" className="nav-link">
                        Create A DietPlan
                    </a>
                </li>

                <li className="nav-item">
                    <a href="" onClick={this.logOut.bind(this)} className="nav-link">
                        Logout
          </a>
                </li>
               
            </ul>
        )
       
        return (
            <Router>
                <div>
            <nav className="navbar navbar-expand-xl">
               
   
         
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarsExample10"
                    aria-controls="navbarsExample10"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>

                <div className="collapse navbar-collapse justify-content-end"
                    id="navbarsExample10">
                    
                    {localStorage.usertoken ? userLink : loginRegLink}
                </div>
                
           
        
            </nav>
            </div>
            </Router>
        )
    }
}

export default withRouter(Landing)