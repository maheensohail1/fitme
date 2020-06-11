import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import CreateTodo from "./components/CreateTodo"
import EditTodo from "./components/EditTodo"
import TodoList from "./components/TodoList"
import axios from 'axios'
import Navbar from './components/NavBar'
import LandingPage from './components/Landing'
import Login from './components/Login'
import Register from './components/Register'
import Profile from './components/Profile'
import Cards from './components/Cards/Cards'
import CreateDP from './components/CreateDP'
import DPPage from './components/DPPage'

//wowwowxx

import './components/style.css';
import './App.css';

import TodoDetails from './components/TodoDetails';
import DPDetails from './components/DPDetails';
import MySessions from './components/MySessions';
import MyDPs from './components/MyDPs';
import EditDP from './components/EditDP';

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
          
            <Route path="/createDP" component={CreateDP} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/profile" component={Profile} />
            <Route path="/" exact component={TodoList} />
            <Route path="/edit/:id" component={EditTodo} />
            <Route path="/editDP/:id" component={EditDP} />
            <Route path="/details/:id" component={TodoDetails} />
            <Route path="/DPdetails/:id" component={DPDetails} />
            <Route path="/usersessions/:id" component={MySessions} />
            <Route path="/userdps/:id" component={MyDPs} />
            <Route path="/create" component={CreateTodo} />
            <Route path="/getTodos" component={LandingPage} />
            <Route path="/getDPs" component={DPPage} />
           
  
        </div>
    
    </Router>
  );
}

export default App;
