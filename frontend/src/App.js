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
import AddToSession from './components/AddToSession';
import InsideTodo from './components/InsideTodo';
import TodoDetails from './components/TodoDetails';

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
            <Route path="/details/:id" component={TodoDetails} />
            <Route path="/create" component={CreateTodo} />
            <Route path="/getTodos" component={LandingPage} />
            <Route path="/getDPs" component={DPPage} />
            <Route path="/todo/:id" component={InsideTodo} />
            <Route path="/addtosession" component={AddToSession} />
  
        </div>
    
    </Router>
  );
}

export default App;
