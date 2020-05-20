import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import CreateTodo from "./components/CreateTodo"
import EditTodo from "./components/EditTodo"
import TodoList from "./components/TodoList"
import axios from 'axios'
import Navbar from './components/NavBar'
import Landing from './components/Landing'
import Login from './components/Login'
import Register from './components/Register'
import Profile from './components/Profile'
import Cards from './components/Cards/Cards'
import Workouts from "./components/Workouts"

//wowwow

import './components/style.css';
import './App.css';

function App() {

  const mystyle = {
    color: "gray",
    padding: "10px",
    fontFamily: "Impact",
    fontSize: 100
  
  }

  return (
    <Router>
    <div className="App">
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark" >
          <Navbar />
          </nav>
          
          <Route exact path="/workouts" component={Workouts} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/profile" component={Profile} />
            <Route path="/" exact component={TodoList} />
            <Route path="/edit/:id" component={EditTodo} />
            <Route path="/create" component={CreateTodo} />
    
  
        </div>
    
    </Router>
  );
}

export default App;
